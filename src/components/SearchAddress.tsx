import React, {FormEvent, useRef} from 'react'
import styled from 'styled-components'
import isIp from 'is-ip'
import isDomain from 'is-valid-domain'

const Form = styled.form`
  display: flex;
  max-width: 500px;
  width: calc(100% - 2 * 2rem);
`

const Input = styled.input`
  font-size: 18px;
  font-family: inherit;
  color: hsl(0, 0%, 17%);
  padding: 1rem 1.5rem;
  width: 100%;
  border: 0;
  border-radius: 1rem 0 0 1rem;

  &::placeholder {
    color: hsl(0, 0%, 59%);
  }

  &:focus {
    outline: transparent;
  }

  @media (max-width: 1000px) {
    font-size: 15px;
  }
`

const Button = styled.button`
  background: #000;
  padding: 1rem 1.5rem;
  border: 0;
  font-size: 18px;
  border-radius: 0 1rem 1rem 0;
  transition: .2s background;

  &:focus {
    outline: transparent;
  }

  &:hover {
    background: hsl(0, 0%, 17%);
    cursor: pointer;
  }
`

interface SearchAddressProps {
  onSubmit: (address: string) => void
}

function SearchAddress({onSubmit}: SearchAddressProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const address = inputRef?.current?.value as string
    if (isIp(address) || isDomain(address)) {
      onSubmit(address)
    } else {
      alert('Please, enter a valid IP address or domain')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        ref={inputRef}
        aria-label="address" 
        name="address" 
        placeholder="Search for any IP address or domain" 
        autoComplete="off"
        size={1}
      />
      <Button type="submit">
        <img src="img/icon-arrow.svg" alt="arrow left"/>
      </Button>
    </Form> 
  )
}

export {SearchAddress}
