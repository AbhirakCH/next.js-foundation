import { render, screen } from '@testing-library/react';
import { Button } from '@/app/ui/button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('should render the button with correct text', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply additional className', () => {
    render(<Button className="my-custom-class">Submit</Button>);

    const buttonElement = screen.getByRole('button', { name: /submit/i });

    expect(buttonElement).toHaveClass('my-custom-class');

    expect(buttonElement).toHaveClass('bg-blue-500');
  });
});
