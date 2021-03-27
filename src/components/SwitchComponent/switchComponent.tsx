import React, { useState } from 'react';
import {
  SpanStyled,
  SwitchComponentWrapper,
  SwitchItem,
} from './switchComponent.styled';

const SwitchComponent: React.FC = () => {
  const [isChecked, toggleChecked] = useState(true);

  const toggleSwitch = () => {
    return toggleChecked(!isChecked);
  };

  return (
    <SwitchComponentWrapper>
      {isChecked ? <SpanStyled>Да</SpanStyled> : <SpanStyled>Нет</SpanStyled>}
      <SwitchItem defaultChecked onChange={toggleSwitch} />
    </SwitchComponentWrapper>
  );
};

export default SwitchComponent;
