import React from 'react'
import {SearchAddress} from '../SearchAddress'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

test('submitting the form with ip address calls onSubmit with that ip', () => {
  const ip = faker.internet.ip()
  const handleSubmit = jest.fn()

  render(<SearchAddress onSubmit={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/address/i), ip)
  userEvent.click(screen.getByRole('button'))

  expect(handleSubmit).toHaveBeenCalledWith(ip)
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

test('submitting the form with domain calls onSubmit with that domain', () => {
  const domain = faker.internet.domainName()
  const handleSubmit = jest.fn()

  render(<SearchAddress onSubmit={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/address/i), domain)
  userEvent.click(screen.getByRole('button'))

  expect(handleSubmit).toHaveBeenCalledWith(domain)
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

test('submitting the form with invalid address show alert with an error', () => {
  window.alert = jest.fn()
  
  const handleSubmit = jest.fn()
  render(<SearchAddress onSubmit={handleSubmit} />)
  
  const randomText = faker.random.word()
  userEvent.type(screen.getByLabelText(/address/i), randomText)
  userEvent.click(screen.getByRole('button'))

  expect(handleSubmit).toHaveBeenCalledTimes(0)
  expect(window.alert).toHaveBeenCalledWith('Please, enter a valid IP address or domain')

  const emptyText = '';
  userEvent.type(screen.getByLabelText(/address/i), emptyText)
  userEvent.click(screen.getByRole('button'))

  expect(handleSubmit).toHaveBeenCalledTimes(0)
  expect(window.alert).toHaveBeenCalledWith('Please, enter a valid IP address or domain')
})