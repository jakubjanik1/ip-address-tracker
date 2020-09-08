import React from 'react'
import { SearchAddress } from '../SearchAddress'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('submitting the form calls onSubmit with address', () => {
    const address = '172.156.23.12'
    const handleSubmit = jest.fn()

    render(<SearchAddress onSubmit={handleSubmit} />)

    userEvent.type(screen.getByLabelText(/address/i), address)
    userEvent.click(screen.getByText(/submit/i))

    expect(handleSubmit).toHaveBeenCalledWith(address)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
})
