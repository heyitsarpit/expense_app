import styled from 'styled-components'

const ParentResponsive = styled.div`
  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    margin: 0 auto;
    width: 100%;
    min-width: 90%;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) => props.theme.minWidthMedium}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthMedium}px) {
    margin: 0 auto;
    width: 100%;
    min-width: 90%;
  }

  /* TABLETS PORTRAIT */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin: 0 auto;
    width: 100%;
    min-width: 70%;
  }

  /* TABLET LANDSCAPE / DESKTOP */
  @media only screen and (min-width: 992px) {
    margin: 0 auto;
    width: 70%;
    min-width: 60%;
  }

  /* TABLET LANDSCAPE / DESKTOP Extra Large*/
  @media only screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 50%;
    min-width: 40%;
  }
`

export default ParentResponsive
