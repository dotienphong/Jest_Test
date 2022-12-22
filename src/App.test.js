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