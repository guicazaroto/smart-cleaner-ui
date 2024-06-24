import '@testing-library/jest-dom'
import { ContactModal } from "@/app/(public)/contratar/[userId]/components/contact-modal";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe('(public)/contratar/[userid]/components/contact-modal.tsx', () => {
  beforeEach(() => {
    render(<ContactModal />);
  });

  it('should render correctly', () => {
    const { asFragment } = render(<ContactModal />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle modal', async () => {
    await act(() => {
     screen.getByText('Enviar Mensagem').click();
    })

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telefone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua mensagem...')).toBeInTheDocument();
  });

})