import { render, screen } from '@testing-library/react';
import { expect, it, } from 'vitest';
import { Button } from './Button';

it('should render a button', () => {
  // arrange
  render(<Button>Primary</Button>);

  // assert
  expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
});