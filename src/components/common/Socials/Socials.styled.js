import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space[7]}px;
  margin-bottom: ${(props) => props.theme.space[11]}px;

  color: ${(props) => props.theme.colors.textTitle};

  @media screen and (min-width: 1280px) {
  }
`
