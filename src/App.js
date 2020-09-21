import React from 'react'
import { SearchAddress } from './components/SearchAddress'
import styled, { createGlobalStyle } from 'styled-components'
import { LocationMap } from './components/LocationMap'

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
        window.fetch(`http://ip-api.com/json/${address}`)
            .then(res => res.json())
            .then(location => setLocation(location))
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
                <LocationMap latitude={location.lat} longitude={location.lon} />
            </Container>
        </>
    )
}
