import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen, waitFor} from '@testing-library/react'
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

  const {ip, isp, location: {city, region, postalCode, timezone}} = currentLocation

  await waitFor(() => {
    expect(screen.getByText(ip)).toBeInTheDocument()
    expect(screen.getByText(city)).toBeInTheDocument()
    expect(screen.getByText(region)).toBeInTheDocument()
    expect(screen.getByText(postalCode)).toBeInTheDocument()
    expect(screen.getByText(timezone)).toBeInTheDocument()
    expect(screen.getByText(isp)).toBeInTheDocument()
  })
})

test('displays information about provided address', async () => {
  render(<App />)

  const addressInput = screen.getByRole('textbox', {name: /address/i})
  userEvent.type(addressInput, 'google.com')
  userEvent.click(screen.getByRole('button'))

  const {ip, isp, location: {city, region, postalCode, timezone}} = sampleLocation

  await waitFor(() => {
    expect(screen.getByText(ip)).toBeInTheDocument()
    expect(screen.getByText(city)).toBeInTheDocument()
    expect(screen.getByText(region)).toBeInTheDocument()
    expect(screen.getByText(postalCode)).toBeInTheDocument()
    expect(screen.getByText(timezone)).toBeInTheDocument()
    expect(screen.getByText(isp)).toBeInTheDocument()
  })
})