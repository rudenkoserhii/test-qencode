import styled from 'styled-components'

export const TitleStyled = styled.h1`
  display: block;

  color: ${(props) => props.theme.colors.textTitle};

  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  white-space: nowrap;
  text-align: center;

  margin-bottom: ${(props) => props.theme.space[13]}px;

  @media screen and (min-width: 1280px) {
  }
`
