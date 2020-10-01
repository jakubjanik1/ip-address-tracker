import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  background: #fff;
  border-radius: 1rem;
  margin-top: 3rem;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  min-height: 160px;
`

const Item = styled.div`
  flex: 1;
  padding: 2.2rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    height: 50%;
    width: 1px;
    background: hsl(0, 0%, 59%, 50%);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`

const ItemHeader = styled.div`
  color: hsl(0, 0%, 59%);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
`

const ItemValue = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 0.8rem; 
`

function LocationInfo({location}) {
    const {ip, timezone, city, postalCode, region, isp} = location

    return (
        <Wrapper>
            <Item>
                <ItemHeader>IP ADDRESS</ItemHeader>
                <ItemValue>{ip}</ItemValue>
            </Item>
            <Item>
                <ItemHeader>LOCATION</ItemHeader>
                <ItemValue>{city}, {region}<br/>{postalCode}</ItemValue>
            </Item>
            <Item>
                <ItemHeader>TIMEZONE</ItemHeader>
                <ItemValue>UTC {timezone}</ItemValue>
            </Item>
            <Item>
                <ItemHeader>ISP</ItemHeader>
                <ItemValue>{isp}</ItemValue>
            </Item>
        </Wrapper>
    )
}

export {LocationInfo}