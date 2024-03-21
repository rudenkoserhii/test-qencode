import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.theme.space[11]}px;

  height: fit-content;
`
