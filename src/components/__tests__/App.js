import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import currentLocation from './current-location.json'

const server = setupServer(
  rest.get('https://geo.ipify.org/api/v1', (req, res, ctx) => {
    if (req.url.searchParams.get('domain') === '') {
      return res(ctx.json(currentLocation))
    }
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('displays information about current location on the first load', async () => {
  render(<App />)

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
  
  expect(screen.getByText('185.192.243.55')).toBeInTheDocument()
  expect(screen.getByText('Warsaw, Mazovia')).toBeInTheDocument()
  expect(screen.getByText('UTC +02:00')).toBeInTheDocument()
  expect(screen.getByText('TELBESKID Sp. z o.o.')).toBeInTheDocument()
})