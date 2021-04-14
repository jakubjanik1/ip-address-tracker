import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 16.5rem;
  transform: translateY(-50%);
  box-sizing: border-box;
  display: flex;
  background: #fff;
  border-radius: 1rem;
  z-index: 1;
  height: 160px;
  width: calc(100% - 2 * 2rem);
  max-width: 1200px;

  @media (max-width: 1000px) {
    top: calc(16.5rem + 2rem) ;
    flex-direction: column;
    height: auto; 
    max-width: 500px;
    align-items: center;
    padding: 1rem;
  }
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

  @media (max-width: 1000px) {
    padding: 0.5rem 2.2rem;

    &::after {
      display: none;
    }
  }
`

const ItemHeader = styled.div`
  color: hsl(0, 0%, 59%);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 10px;
  }
`

const ItemValue = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 0.8rem;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 1000px) {
    font-size: 19px;
    margin-top: 0.5rem;
    text-align: center;
  }
`

function LocationInfo({location}) {
    const {ip, timezone, city, postalCode, region, isp} = location

    return (
        <Wrapper>
            <Item>
                <ItemHeader>IP ADDRESS</ItemHeader>
                <ItemValue>{ip ?? '-'}</ItemValue>
            </Item>
            <Item>
                <ItemHeader>LOCATION</ItemHeader>
                {city ? (
                  <ItemValue>
                    <span>{city}</span>, <span>{region}</span> <span>{postalCode}</span>
                  </ItemValue>
                ) : (
                  <ItemValue> - </ItemValue>
                )}
            </Item>
            <Item>
                <ItemHeader>TIMEZONE</ItemHeader>
                {timezone ? (
                  <ItemValue>
                    UTC <span>{timezone}</span>
                  </ItemValue>
                ) : (
                  <ItemValue> - </ItemValue>
                )}
            </Item>
            <Item>
                <ItemHeader>ISP</ItemHeader>
                <ItemValue>{isp ?? '-'}</ItemValue>
            </Item>
        </Wrapper>
    )
}

export {LocationInfo}