import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  grid-gap: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2.5rem;
  z-index: 1;
  width: 100%;
  max-width: 1000px;

  & > :not(:last-child) {
    border-right: 1px solid hsl(0, 0%, 59%);
    padding-right: 2rem;
  }

  & > * {
    flex: 1;
  }
`

const Field = styled.div`
  color: hsl(0, 0%, 59%);
  font-size: 13px;
  font-weight: 500;
`

const Value = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-top: 0.5rem; 
`

function LocationInfo({location}) {
    const {ip, timezone, city, postalCode, region, isp} = location

    return (
        <Wrapper>
            <div>
                <Field>IP ADDRESS</Field>
                <Value>{ip}</Value>
            </div>
            <div>
                <Field>LOCATION</Field>
                <Value>{city}, {region}<br/>{postalCode}</Value>
            </div>
            <div>
                <Field>TIMEZONE</Field>
                <Value>UTC {timezone}</Value>
            </div>
            <div>
                <Field>ISP</Field>
                <Value>{isp}</Value>
            </div>
        </Wrapper>
    )
}

export {LocationInfo}