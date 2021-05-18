import styled from 'styled-components/native';
import { defaultTheme } from '../../styles/theme-colors';
import { Icon as RneIcon } from 'react-native-elements';

export const Icon = styled(RneIcon)`
  padding: 15px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${() => defaultTheme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
