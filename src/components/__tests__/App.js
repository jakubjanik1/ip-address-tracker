import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import currentLocation from './current-location.json'
import sampleLocation from './sample-location.json'

const server = setupServer(
  rest.get('https://geo.ipify.org/api/v1', (req, res, ctx) => {
    if (req.url.searchParams.get('domain') === '') {
      return res(ctx.json(currentLocation))
    } else {
      return res(ctx.json(sampleLocation))
    }
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('displays information about current location on the first load', async () => {
  render(<App />)

  await waitForElementToBeRemoved(() => screen.getAllByText('-'))
  
  expect(screen.getByText('185.192.243.55')).toBeInTheDocument()
  expect(screen.getByText('Warsaw, Mazovia')).toBeInTheDocument()
  expect(screen.getByText('UTC +02:00')).toBeInTheDocument()
  expect(screen.getByText('TELBESKID Sp. z o.o.')).toBeInTheDocument()
})

test('displays information about provided address', async () => {
  render(<App />)

  const addressInput = screen.getByRole('textbox', {name: /address/i})
  userEvent.type(addressInput, 'google.com')
  userEvent.click(screen.getByRole('button'))

  await waitForElementToBeRemoved(() => screen.getAllByText('-'))

  expect(screen.getByText('172.217.5.78')).toBeInTheDocument()
  expect(screen.getByText('Los Angeles, California 90009')).toBeInTheDocument()
  expect(screen.getByText('UTC -07:00')).toBeInTheDocument()
  expect(screen.getByText('Google LLC')).toBeInTheDocument()
})