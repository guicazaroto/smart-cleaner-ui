import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Page from '@/app/(public)/entrar/page'
import { mockFetch } from '../../../mockFetch';

// mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('(public)/entrar/page', () => {
  it('renders a heading', () => {
     render(<Page />)
 
    const heading = screen.getByText('Acesse sua conta')

    expect(heading).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Page />)

    const emailField = screen.getByLabelText('Email')
    const passwordField = screen.getByLabelText('Senha')

    expect(emailField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
  })

  it('submits the form', () => {
    window.fetch = mockFetch({ token: '123' });

    render(<Page />)

    const emailField = screen.getByLabelText('Email')
    const passwordField = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { name: 'Entrar' })

    fireEvent.change(emailField, { target: { value: 'gui.cazaroto@gmail.com' } })
    fireEvent.change(passwordField, { target: { value: '123456' } })
    fireEvent.click(submitButton)

    expect(submitButton).toBeInTheDocument()
    expect(window.fetch).toHaveBeenCalledTimes(1)
  })
  
})