import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.lightgray};
  max-width: 100vw;
  max-height: 100vh;
  margin: ${(p) => p.theme.space[0]}px auto;
  padding: ${(p) => p.theme.space[0]}px ${(p) => p.theme.space[0]}px;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.white};
  width: 100vw;
  height: 100vh;
  padding: ${(props) => props.theme.space[5]}px;
`
