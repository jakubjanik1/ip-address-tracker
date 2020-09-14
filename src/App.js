import React from 'react'
import { SearchAddress } from './components/SearchAddress'
import styled, { createGlobalStyle } from 'styled-components'
import { Map, TileLayer } from 'react-leaflet'

const GlobalStyle = createGlobalStyle`
    body {
        background: url('img/pattern-bg.png') no-repeat;
        background-size: 100% auto;
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
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header>IP Address Tracker</Header>
                <SearchAddress />
                <Map center={[39.95, 30.33]} zoom={13}  style={{ width: '100%', height: 'calc(100vh - 250px)', marginTop: '113px'}}>
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </Container>
        </>
    )
}
