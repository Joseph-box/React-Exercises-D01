import React from 'react';
import { render } from "@testing-library/react";
import WithChildren from '../exercises/7_WithChildren';

it('should have one child', () => {
  const { container } = render(
    <WithChildren>
      <div id="myDiv">Hi</div>
    </WithChildren>
  );
  expect(container.querySelector('#myDiv')).toBeDefined();
});
