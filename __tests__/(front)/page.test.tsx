import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from 'app/(front)/page'

describe('Tests in <Home />', () => {
  test('<Home /> component renders', () => {
    render(<Home />)
    expect(screen.getByText('Últimos productos')).toBeTruthy()
  })
})
