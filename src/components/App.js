import React from 'react'
import {SearchAddress} from './SearchAddress'
import styled, {createGlobalStyle} from 'styled-components'
import {LocationMap} from './LocationMap'

const GlobalStyle = createGlobalStyle`
  body {
    background: url('img/pattern-bg.png') no-repeat;
    background-size: 100% 250px;
    font-family: 'Rubik', sans-serif; 
    margin: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1`
  color: #fff;
  font-weight: 500;
`

export default function App() {
  const [address, setAddress] = React.useState('')
  const [location, setLocation] = React.useState(null)
  
  React.useEffect(() => {
    window.fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&domain=${address}`)
      .then(res => res.json())
      .then(json => {
        setLocation({ ...json.location, ...json.ip, ...json.isp})
      })
  }, [address])

  if (!location) {
    return 'Loading'
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>IP Address Tracker</Header>
        <SearchAddress onSubmit={address => setAddress(address)} />
        <LocationMap latitude={location.lat} longitude={location.lng} />
      </Container>
    </>
  )
}
