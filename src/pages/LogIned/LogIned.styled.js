import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* gap: ${(props) => props.theme.space[11]}px; */

  height: fit-content;
`
export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 1.4;
  text-align: left;

  width: 100%;
  margin-bottom: ${(props) => props.theme.space[3]}px;
`
