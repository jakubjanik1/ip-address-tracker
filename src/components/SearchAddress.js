import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
`

const Input = styled.input`
    font-size: 18px;
    color: hsl(0, 0%, 17%);
    padding: 1rem 1.5rem;
    border: 0;
    border-radius: 1rem 0 0 1rem;
    width: 500px;

    &::placeholder {
        color: hsl(0, 0%, 59%);
    }

    &:focus {
        outline: transparent;
    }
`

const Button = styled.button`
    background: #000;
    padding: 1rem 1.5rem;
    border: 0;
    font-size: 18px;
    border-radius: 0 1rem 1rem 0;

    &:focus {
        outline: transparent;
    }
`

export const SearchAddress = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(e.target.elements.address.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input aria-label="address" name="address" placeholder="Search for any IP address or domain" />
            <Button type="submit">
                <img src="img/icon-arrow.svg" alt="arrow left"/>
            </Button>
        </Form> 
    )
}
