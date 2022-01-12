import React from 'react'
import { FooterBox, MapSubtitle,FooterTitle } from './styles'
export const SiteMap=({handleNavigation})=>(
     <FooterBox>
      <FooterTitle>Site Map</FooterTitle>
      <MapSubtitle onClick={() => handleNavigation("about")}>
        About Me
      </MapSubtitle>
      <MapSubtitle onClick={() => handleNavigation("portfolio")}>
        Portfolio
      </MapSubtitle>
      <MapSubtitle onClick={() => handleNavigation("experience")}>
        Experience
      </MapSubtitle>
    </FooterBox>
)