import { render, screen } from '@testing-library/react';
import AnimatedGradientText from './AnimatedGradientText';

describe('AnimatedGradientText', () => {
  it('should render text content', () => {
    render(<AnimatedGradientText>Hello World</AnimatedGradientText>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should have the correct text color and background gradient', () => {
    render(<AnimatedGradientText>Hello World</AnimatedGradientText>);
    const element = screen.getByText('Hello World');
    expect(element).toHaveStyle('color: #279c87');
    expect(element).toHaveStyle('background-image: -webkit-linear-gradient(92deg, #026153, #5ebfb5)');
  });
});