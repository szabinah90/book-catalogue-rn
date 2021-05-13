import styled from 'styled-components/native';

export const View = styled.View<{ isPortrait: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${props => (props.isPortrait ? 'flex-start' : 'space-between')};
  background-color: ${props => (props.isPortrait ? '#000' : '#fff')};
`;

/*justify-content: ${props => (props.isPortrait ? 'flex-start' : 'space-between')};
  background-color: ${props => (props.isPortrait ? '#000' : '#fff')};*/
