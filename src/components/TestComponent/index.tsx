import React from 'react';
import { ComponentWrapper } from './index.styled';
import SwitchComponent from '../SwitchComponent/switchComponent';

const TestComponent: React.FC = () => {
  return (
    <ComponentWrapper>
      <SwitchComponent />
    </ComponentWrapper>
  );
};

export default TestComponent;
