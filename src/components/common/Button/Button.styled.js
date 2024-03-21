import styled from 'styled-components'

export const ButtonStyled = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${(props) => props.theme.space[6]}px;

  width: ${(props) => `${props['data-width']}px` || 'auto'};
  height: ${(props) => props.theme.space[14]}px;
  border: ${(props) => props['data-border'] || 'none'};
  border-radius: ${(props) => props['data-radius']};
  margin-bottom: ${(props) => props['data-mb'] || 'auto'};

  background-color: ${(props) => props['data-bg']};
  color: ${(props) => props['data-color']};

  cursor: pointer;

  transition: ${(props) => props.theme.animation.hover};

  &:hover,
  &:focus {
    filter: ${(props) => props.theme.filter.hover};

    transition: ${(props) => props.theme.animation.hover};
  }

  @media screen and (min-width: 1280px) {
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space[4]}px;
  @media screen and (min-width: 1280px) {
  }
`
export const Span = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  @media screen and (min-width: 1280px) {
  }
`
