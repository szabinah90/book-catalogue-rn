import styled from 'styled-components/native';

export const ListContainer = styled.View<{ isPortrait: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${props => (props.isPortrait ? 'flex-start' : 'space-between')};
`;
