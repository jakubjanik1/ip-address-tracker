import React from 'react'
import {SearchAddress} from './SearchAddress'
import styled, {createGlobalStyle} from 'styled-components'
import {LocationMap} from './LocationMap'
import {LocationInfo} from './LocationInfo'

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
  const [location, setLocation] = React.useState({})
  
  React.useEffect(() => {
    setLocation({})
    window.fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&domain=${address}`)
      .then(res => res.json())
      .then(json => {
        setLocation({...json.location, ip: json.ip, isp: json.isp})
      })
  }, [address])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>IP Address Tracker</Header>
        <SearchAddress onSubmit={address => setAddress(address)} />
        <LocationInfo location={location} />
        <LocationMap latitude={location.lat} longitude={location.lng} />
      </Container>
    </>
  )
}
