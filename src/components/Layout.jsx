import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { NotFoundBoundary } from 'react-navi'
import { Navigation } from './Navigation.jsx'
import { FourOhFour } from '../pages/FourOhFour.jsx'
import { PersonalScrollbar } from './PersonalScrollbar.jsx'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${props => props.theme.menuBackgroundColor};
`

const StylishMenuButton = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  color: ${props => props.theme.detailColor};
  width: 3rem;
  height: 3rem;
  text-align: center;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.animationDuration};
  background: transparent;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 0;
  transition: ${props => props.theme.animationDuration};
  opacity: 0;
  flex-shrink: 0;
  pointer-events: none;
  ${props => {
    if (props.isOpen) {
      return css`
        height: 5rem;
        opacity: 1;
        pointer-events: inherit;
      `
    }
  }}
`
const StylishContentHolder = styled.div`
  background: ${props => props.theme.pageBackgroundColor};
  flex-grow: 1;
  transition: ${props => props.theme.animationDuration};
  overflow: auto;
  color: ${props => props.theme.detailColor};
  ${props => {
    if (props.isMenuOpen) {
      return css`
        margin: 0 3rem;
        border-radius: .3rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `
    }
  }}
`

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuClick = () => {
    setIsMenuOpen(value => !value)
  }

  const menuIcon = isMenuOpen ? 'fa-times' : 'fa-bars'

  return (
    <StyledLayout>
      <TopBar isOpen={isMenuOpen}>
        <Navigation onClick={() => {
          toggleMenuClick()
        }}
        />
      </TopBar>
      <StylishMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenuClick}><i className={`fas ${menuIcon}`} /></StylishMenuButton>
      <StylishContentHolder isMenuOpen={isMenuOpen}>
        <PersonalScrollbar>
          <NotFoundBoundary render={renderNotFound}>
            {children}
          </NotFoundBoundary>
        </PersonalScrollbar>
      </StylishContentHolder>
    </StyledLayout>
  )
}

function renderNotFound () {
  return (
    <FourOhFour />
  )
}
