import styled from 'styled-components/native';
import { defaultTheme } from '../../../styles/theme-colors';

export const GenreText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${() => defaultTheme.secondaryDark};
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${() => defaultTheme.secondaryDark};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-style: italic;
  color: ${() => defaultTheme.primaryDark};
  margin-bottom: 10px;
`;

export const DetailsContainer = styled.View`
  margin-left: 15px;
`;

export const DescriptionText = styled.Text`
  font-size: 20px;
  text-align: justify;
  margin-top: 10px;
  color: ${() => defaultTheme.primaryDark};
`;
