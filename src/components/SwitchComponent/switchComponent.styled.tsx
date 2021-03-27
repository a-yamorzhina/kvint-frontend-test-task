import styled from 'styled-components';
import { Switch } from 'antd';
import 'antd/dist/default-theme';
import './switchComponent.css';

// eslint-disable-next-line import/prefer-default-export
export const SwitchComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const SwitchItem = styled(Switch)`
  &&.ant-switch-checked {
    background-color: #0f213c;
  }

  &&.ant-switch-checked div::before {
    background-color: #01c8f8;
  }

  //height: @switch-sm-height;
  height: 16px;
  background-color: #b5b5b5;
  margin-top: 15px;

  && div {
    width: 22px;
    height: 22px;
  }

  && div::before {
    background-color: #919191;
    border-radius: 11px;
    top: -6px;
    right: 1px;
    bottom: 6px;
    left: -1px;
  }
`;

export const SpanStyled = styled.span`
  font-family: 'Montserrat', serif;
  font-size: 15px;
  font-weight: 500;
  display: block;
  margin: 0 auto;
  color: #dfe0e2;
`;
