import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Header from '@/components/header/Header'

describe('Tests in <Header />', () => {
  test('<Header /> component renders', () => {
    render(<Header />)
    expect(screen.getByText('Mariscos La Parada')).toBeTruthy()
  })
})
