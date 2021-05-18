import styled from 'styled-components/native';

type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';
type AlignItemsType = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline';
type FlexDirectionType = 'column' | 'row';
type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export const ScreenContainer = styled.ScrollView`
  padding: 10px;
  height: 100%;
  background-color: antiquewhite;
`;

export const Flexbox = styled.View<{
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  direction?: FlexDirectionType;
  wrap?: FlexWrapType;
  width?: string;
}>`
  display: flex;
  justify-content: ${props => props?.justifyContent ?? 'flex-start'};
  align-items: ${props => props?.alignItems ?? 'baseline'};
  flex-direction: ${props => props?.direction ?? 'row'};
  flex-wrap: ${props => props?.wrap ?? 'nowrap'};
  width: ${props => props?.width ?? '100%'};
`;
