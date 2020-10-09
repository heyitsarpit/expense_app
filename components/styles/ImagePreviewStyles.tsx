import styled from 'styled-components'

export const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .preview-image {
    width: 7em;
    height: 7em;
    border-radius: 1em;
    overflow: hidden;
    float: right;
  }

  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    .preview-image {
      width: 5em;
      height: 5em;
    }
  }
`

export const UpdateImage = styled.button`
  width: 30%;
  background: transparent;
  color: ${(props) => props.theme.textPrimary};
  font-family: ${(props) => props.theme.fontSecondary};
  padding: 0.2em;
  margin: 1em;
  font-size: 0.8em;
  align-self: flex-end;
  border: solid 1px ${(props) => props.theme.textPrimary};
  float: right;
  border-radius: 1em;

  :focus {
    outline: none;
  }
  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    font-size: 0.8em;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    font-size: 0.9em;
  }
`

export const Modal = styled.div`
  z-index: 1;
  position: fixed;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;

  .modal-image {
    margin: auto;
    width: auto;
    height: 95%;
    overflow: auto;
    align-self: flex-end;
  }

  .modal-image {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .close {
    color: #fff;
    font-size: 3em;
    font-weight: bold;
    transition: 0.3s;
    align-self: flex-end;
    margin: 0.2em 0.5em 0 0;
    cursor: pointer;
    position: fixed;
  }
`
