import React from 'react'
import { SearchAddress } from './components/SearchAddress'
import styled,{ createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: url('img/pattern-bg.png') no-repeat;
        background-size: cover;
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
            </Container>
        </>
    )
}
