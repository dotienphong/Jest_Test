import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'


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

// Clip 23 Udemy
test('Finding checkbox with Label', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // Check enabled or disabled button When user click checkbox
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

// Clip 24 Udemy
test('Disabled button has gray background and revert to red', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // Disabled Button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')
  // Re-Enable Button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: red')
})
test('Click Disabled button has gray background and revert to blue', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // Change button to blue
  fireEvent.click(colorButton)
  // Disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color : gray')
  // Re-Enable Button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: blue')
})


// Clip 25: Unit testing Functions
describe('spaces before camel-case capital letters', () => {
  //ho???t ?????ng ko c?? ch??? in hoa b??n trong
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  //ho???t ?????ng c?? 1 ch??? in hoa b??n trong
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  //ho???t ?????ng c?? nhi???u ch??? in hoa b??n trong
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})