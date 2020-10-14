import React from 'react'
import {Map, TileLayer, Marker} from 'react-leaflet'
import {Icon} from 'leaflet'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const StyledMap = styled(Map)`
  width: 100%;
  height: calc(100vh - 16.5rem);
  z-index: 0;
  margin-top: auto;
`

const StyledLoader = styled(Loader)`
  width: 100%;
  height: calc(100vh - 16.5rem);
  z-index: 0;
  margin-top: auto;
  background: #eee;
  display: grid;
  place-items: center;
`

function LocationMap({latitude, longitude}) {
  const coordinates = [latitude, longitude]

  if (!latitude) {
    return <StyledLoader type="ThreeDots" color="black" />
  }

  return (
    <StyledMap 
      zoomControl={false}
      center={coordinates} 
      zoom={14} 
    >
      <Marker 
        position={coordinates} 
        icon={
          new Icon({
            iconUrl: 'img/icon-location.svg', 
            iconSize: [46, 56], 
            iconAnchor: [23, 56]
          })
        }
      />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </StyledMap>
  )
}

export {LocationMap}