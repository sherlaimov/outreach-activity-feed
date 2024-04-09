import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App.tsx';

describe('App', () => {
  it('should render properly', async () => {
    render(<App />);

    const noteInput = screen.getByRole('note-input');

    await userEvent.click(noteInput);

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    await userEvent.type(noteInput, 'Banana milk cappuccino was delicious.');

    expect(
      screen.getByText('Banana milk cappuccino was delicious.')
    ).toBeInTheDocument();

    expect(submitButton).not.toBeDisabled();

    const noteTypeRadioButtons = screen.getAllByRole('radio');

    expect(noteTypeRadioButtons).toHaveLength(5);
  });

  it('should add & remove notes', async () => {
    render(<App />);

    const noteInput = screen.getByRole('note-input');

    await userEvent.click(noteInput);

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    await userEvent.type(noteInput, 'Banana milk cappuccino was delicious.');

    expect(
      screen.getByText('Banana milk cappuccino was delicious.')
    ).toBeInTheDocument();

    expect(submitButton).not.toBeDisabled();

    await act(async () => {
      await userEvent.click(submitButton);
    });

    const messageRow = screen.getByTestId('message');

    expect(
      within(messageRow).getByText('Banana milk cappuccino was delicious.')
    ).toBeInTheDocument();

    expect(submitButton).not.toBeInTheDocument();

    const noteTypeRadioButtons = screen.queryAllByRole('radio');
    expect(noteTypeRadioButtons).toHaveLength(0);

    const noteRowMenuButton = screen.getByTestId('noterow-menu-trigger');

    await userEvent.click(noteRowMenuButton);

    const deleteButton = screen.getByRole('button', { name: /delete/i });

    await userEvent.click(deleteButton);

    expect(
      within(messageRow).getByText('Banana milk cappuccino was delicious.')
    ).not.toBeInTheDocument();
  });
});
