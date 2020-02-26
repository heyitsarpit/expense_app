import styled from 'styled-components'

const ParentResponsive = styled.div`
  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    margin: 0 auto;
    width: 100%;
    min-width: 90%;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: 480px) and (max-width: 767px) {
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
