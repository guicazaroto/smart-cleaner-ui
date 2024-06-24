import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Head from '@/app/(public)/head'

describe('(public)/head', () => {
  beforeEach(() => {
    render(<Head />)
  })

  it('renders a heading', () => {
    const heading = screen.getByText('SmartCleaner')
    expect(heading).toBeInTheDocument()
  })

  it('renders the menu nav items', () => {
    const home = screen.getByText('Início')
    const contratar = screen.getByText('Contratar')
    const cadastro = screen.getByText('Trabalhe no App')
    const entrar = screen.getByText('Entrar')
    
    expect(home).toBeInTheDocument()
    expect(contratar).toBeInTheDocument()
    expect(cadastro).toBeInTheDocument()
    expect(entrar).toBeInTheDocument()
  })
})