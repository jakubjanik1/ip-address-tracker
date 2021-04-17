import React from 'react'
import {SearchAddress} from './SearchAddress'
import styled, {createGlobalStyle} from 'styled-components'
import {LocationMap} from './LocationMap'
import {LocationInfo} from './LocationInfo'
import {Location} from '../models/Location'

const GlobalStyle = createGlobalStyle`
  body {
    background: url('img/pattern-bg.png') no-repeat;
    background-size: 100% 16.5rem;
    font-family: 'Rubik', sans-serif; 
    margin: 0;

    @media (max-width: 1000px) {
      background-size: auto 16.5rem;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const Header = styled.h1`
  color: #fff;
  font-weight: 500;
`

export default function App() {
  const [address, setAddress] = React.useState('')
  const [location, setLocation] = React.useState<Location>()
  
  React.useEffect(() => {
    window.fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&domain=${address}`)
      .then(res => res.json())
      .then(location => {
        const {ip, isp, location: {city, region, postalCode, timezone, lat, lng}} = location

        setLocation({ip, isp, city, region, postalCode, timezone, lat, lng})
      })
  }, [address])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>IP Address Tracker</Header>
        <SearchAddress onSubmit={address => setAddress(address)} />
        <LocationInfo location={location ?? {}} />
        <LocationMap 
          latitude={location && location.lat} 
          longitude={location && location.lng}
        />        
      </Container>
    </>
  )
}
