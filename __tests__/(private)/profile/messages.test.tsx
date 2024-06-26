import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MessagesTab from '@/app/(private)/profile/messages'
const mockMessages = [
  { id: 1, name: 'João Henrique', email: 'joao@example.com', telefone: '(27) 3233-32323', text: 'Olá, como vai? gostaria de saber quanto cobra para lavar uma garagem, favor entrar em contato via email.' },
  { id: 2, name: 'Maria Madalena', email: 'maria@example.com',telefone: '(28) 3233-32323', text: 'Precisamos discutir o projeto.' },
  { id: 3, name: 'Carlos Imperial', email: 'carlos@example.com', telefone: '(29) 3233-32323', text: 'Lembre-se da reunião amanhã.' },
];

describe('(private)/profile/messages', () => {
  beforeEach(() => {
    render(<MessagesTab messages={mockMessages} />)
  })

  it('renders a heading', () => {
    const heading = screen.getByText('Mensagens Recebidas')
    expect(heading).toBeInTheDocument()
  })

  it('renders the messages', () => {
    mockMessages.forEach(async (message) => {
      const name = screen.findByText(message.name)
      const email = await screen.findByText(message.email)
      const text = await screen.findByText(message.text)
      const telefone = await screen.getByText(message.telefone)

      expect(name).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(text).toBeInTheDocument()
      expect(telefone).toBeInTheDocument()
    });
  })
})
