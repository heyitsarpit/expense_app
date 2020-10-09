import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 32px;
  padding: 16px;
  font-size: 16px;
  width: 50%;
  margin: 32px;
  @media (min-width: ${(props) => props.theme.minWidthSmall}px) {
    font-size: 15px;
    width: 90%;
  }
  @media (min-width: ${(props) => props.theme.minWidthMedium}px) {
    font-size: 16px;
    width: 70%;
  }
  @media (min-width: ${(props) => props.theme.maxWidthMedium}px) {
    font-size: 18px;
    width: 40%;
  }

  /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
`

export const Currency = styled.div`
  font-family: ${(props) => props.theme.fontSecondary};
  font-size: 2em;
  padding-bottom: 0.5em;
  text-align: center;
`

export const Date = styled.div`
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.95em;
  text-align: center;
`

export const DataField = styled.div`
  padding-top: 1.2em;
`

export const Label = styled.div`
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimaryDimmed};
  font-size: 0.9em;
  padding-bottom: 0.9em;
`

export const Value = styled.div`
  font-family: ${(props) => props.theme.fontMain};
`
