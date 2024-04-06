import { render, screen } from '@testing-library/react';
import { NavHeader } from '..';

it('renders text strings passed as children', async () => {
  render(<NavHeader>My Header</NavHeader>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toContain(/my header/i);
});
