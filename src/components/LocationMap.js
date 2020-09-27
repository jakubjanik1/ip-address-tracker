import React from 'react'
import {Map, TileLayer, Marker} from 'react-leaflet'
import {Icon} from 'leaflet'
import styled from 'styled-components'

const StyledMap = styled(Map)`
  width: 100%;
  height: calc(100vh - 250px);
  margin-top: -68px;
  z-index: 0;
`

function LocationMap({latitude, longitude}) {
  const coordinates = [latitude, longitude]

  return (
    <StyledMap 
      zoomControl={false}
      center={coordinates} 
      zoom={14} 
    >
      <Marker 
        position={coordinates} 
        icon={new Icon({iconUrl: 'img/icon-location.svg'})}
      />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </StyledMap>
  )
}

export {LocationMap}