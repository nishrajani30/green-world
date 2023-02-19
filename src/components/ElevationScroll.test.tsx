import {render, screen} from '@testing-library/react';
import React from 'react';
import ElevationScroll from './ElevationScroll';

describe('ElevationScroll component', () => {
  it('should render the children components', () => {
    const mockChild = <div data-testid="child">Child component</div>;
    render(
      <ElevationScroll>
        {mockChild}
      </ElevationScroll>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});