import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and update when click', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />)

  //Check that the button starts out enable
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()

  //Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disabled button on first click and enabled on second click', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox')
  const button = screen.getByRole('button')

  //Check enabled or disabled button When user click checkbox
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('Finding checkbox with Label', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  //Check enabled or disabled button When user click checkbox
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})