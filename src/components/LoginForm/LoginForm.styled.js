import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Line = styled.p`
  position: relative;

  display: inline-block;

  color: ${(props) => props.theme.colors.lineText};

  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.33;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;

  width: ${(props) => props.theme.space[8]}px;
  margin-bottom: ${(props) => props.theme.space[11]}px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: calc(100% + 5px);
    transform: translateY(-50%);

    width: 186px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lineBrake};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 5px);
    transform: translateY(-50%);

    width: 186px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lineBrake};
  }

  @media screen and (min-width: 1280px) {
  }
`
