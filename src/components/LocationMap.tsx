import React from 'react'
import {Map, TileLayer, Marker, MapProps} from 'react-leaflet'
import {Icon, LatLng} from 'leaflet'
import styled, {keyframes, css} from 'styled-components'

const shared = css`
  width: 100%;
  height: calc(100vh - 16.5rem);
  z-index: 0;
  margin-top: auto;
`

const StyledMap = styled(Map)<MapProps>`${shared}`

const Loading = styled.div`
  ${shared}
  background: #eee;
  display: grid;
  place-items: center;
`

const jump = keyframes`
  0% {transform: translateY(0) scale3d(1, 1, 1)}
  40% {transform: translateY(-30%) scale3d(.9, 1.3, 1)}
  100% {transform: translateY(-100%) scale3d(1.1, .9, 1)}
`

const LocationIcon = styled.div`
  background-image: url('img/icon-location.svg');
  width: 46px;
  height: 56px;
  margin-top: 3.5rem;
  animation: ${jump} .7s linear alternate infinite;
`

interface LocationMapProps {
  latitude?: number
  longitude?: number
}

function LocationMap({latitude, longitude}: LocationMapProps) {
  if (!latitude || !longitude) {
    return <Loading><LocationIcon /></Loading>
  }
  
  const coordinates = new LatLng(latitude, longitude)

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