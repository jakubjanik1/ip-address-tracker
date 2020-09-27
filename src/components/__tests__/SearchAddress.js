import React from 'react'
import {SearchAddress} from '../SearchAddress'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

test('submitting the form calls onSubmit with address', () => {
  const address = faker.internet.ip()
  const handleSubmit = jest.fn()

  render(<SearchAddress onSubmit={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/address/i), address)
  userEvent.click(screen.getByRole('button'))

  expect(handleSubmit).toHaveBeenCalledWith(address)
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})