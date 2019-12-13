import React from 'react'
import styled, { css } from 'styled-components'
import { Link, useActive } from 'react-navi'

const StylishNavigationWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  ${
  props => {
    if (props.isOpen) {
      return css`
        height: auto;
      `
    }
  }
}
`

const StylishNavLink = styled(Link)`
  padding: .5rem 1rem;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.detailColor};
  cursor: pointer;
  user-select: none;
  border: .25rem solid transparent;
  border-radius: .3rem;
  margin-right: .25rem;
  :hover{
    border: .25rem solid;
  }
  ${props => {
    if (props.active) {
      return css`
        background: ${props => props.theme.pageBackgroundColor};
        border-radius: .3rem;
      `
    }
  }}
`

const links = [
  {
    label: 'with-two-dashes.com',
    href: '/'
  },
  {
    label: 'about',
    href: '/about'
  }
]

export const Navigation = ({ onClick }) => {
  return (
    <StylishNavigationWrapper>
      {
        links.map(({ label, href }) => {
          return (
            <StylishNavLink
              key={href}
              href={href}
              active={useActive(href)}
              onClick={onClick}
            >
              {label}
            </StylishNavLink>
          )
        })
      }
    </StylishNavigationWrapper>
  )
}
