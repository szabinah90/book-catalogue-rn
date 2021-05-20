import styled from 'styled-components/native';

export const View = styled.View`
  width: 100%;
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Text = styled.Text<{ color: string }>`
  color: ${props => props.color};
  font-weight: bold;
  text-transform: uppercase;
`;
