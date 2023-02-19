import { render } from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

describe('LoadingScreen', () => {
  test('renders without errors', () => {
    const { container } = render(<LoadingScreen />);
    expect(container).toBeInTheDocument();
  });
});