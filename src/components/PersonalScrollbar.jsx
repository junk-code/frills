import React from 'react'
import Scrollbar from 'react-scrollbars-custom'
import styled from 'styled-components'

const CustomScrollbar = styled(Scrollbar)`
  .ScrollbarsCustom-Track.ScrollbarsCustom-TrackY{
    border-radius: 0 !important;
    top: 0 !important;
    height: 100% !important;
    background: ${props => props.theme.pageBackgroundColor} !important;
    width: .75rem !important;
  }
  .ScrollbarsCustom-Thumb.ScrollbarsCustom-ThumbY{
    background-color: ${props => props.theme.detailColor} !important;
    border-radius: .5rem !important;
    border: .3rem solid ${props => props.theme.pageBackgroundColor};
    // top: 0 !important;
    // height: 100% !important;
    width: .75rem !important;
  }
  
`

export const PersonalScrollbar = ({ children }) => {
  return (
    <CustomScrollbar>
      {children}
    </CustomScrollbar>
  )
}
