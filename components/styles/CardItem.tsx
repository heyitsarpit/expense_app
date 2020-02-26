import styled from 'styled-components'

export const CardItem = styled.div`
  cursor: pointer;
  margin: 0 auto;
  border: transparent;
  border-bottom: solid 1px ${(props) => props.theme.colorUnfocused};
  :hover {
    border-color: ${(props) => props.theme.textPrimary};
  }

  .EditBox {
    form {
      display: grid;
      grid-template-columns: 2.5fr 1fr;
      /* grid-template-rows: 2fr 1fr; */
      grid-template-areas: 'Comment Image' 'Save Save';

      .Comment {
        grid-area: Comment;
        margin: 1em;
      }

      .Image {
        grid-area: Image;
        justify-self: right;
      }

      .Save {
        grid-area: Save;
        width: 40%;
        margin: 0 auto;
        background: transparent;
        color: ${(props) => props.theme.textPrimary};
        font-family: ${(props) => props.theme.fontSecondary};
        padding: 0.2em;
        border: solid 1px ${(props) => props.theme.textPrimary};
        border-radius: 1em;
        margin-bottom: 1em;
        :focus {
          outline: none;
        }
        :disabled {
          opacity: 0.2;
        }
      }
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: 0fr 1fr 0.5fr;
    grid-template-rows: 0.25fr 1fr 1fr 0fr;
    grid-template-areas:
      'Date Date Date'
      'Icon Name Value'
      'Icon Email Merchant'
      'EditBox EditBox EditBox';

    margin-top: 0.1em;
    padding: 0.5em;

    .Icon {
      grid-area: Icon;
      width: 50px;
      justify-self: right;
      margin-right: 1em;

      --size: 2em;
      width: var(--size);
      height: var(--size);

      background: ${(props) => props.theme.textPrimaryDimmed};
      color: ${(props) => props.theme.bgColor};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
    }

    .Name {
      grid-area: Name;
      font-family: ${(props) => props.theme.fontMain};
      font-weight: bold;
      font-size: 1.2em;
    }

    .Email {
      grid-area: Email;
      a {
        font-size: 0.9em;
        font-family: ${(props) => props.theme.fontSecondary};
        color: ${(props) => props.theme.textSecondary};
      }
    }

    .Value {
      grid-area: Value;
      justify-self: end;
      font-family: ${(props) => props.theme.fontMain};
      font-weight: bold;
      font-size: 1.2em;
    }

    .Merchant {
      grid-area: Merchant;
      font-stretch: expanded;
      justify-self: end;
      font-family: ${(props) => props.theme.fontSecondary};
      color: ${(props) => props.theme.textSecondary};
    }

    .Date {
      grid-area: Date;
      justify-self: end;
      font-size: 0.85em;
      padding: 0.1em;
      margin: 0.1em;
      font-family: ${(props) => props.theme.fontMain};
      color: ${(props) => props.theme.textSecondary};
    }
  }

  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    .grid-container {
      .Name {
        font-size: 1.1em;
      }
      .Merchant {
        font-size: 1.1em;
      }
      .Email {
        a {
          font-size: 0.7em;
        }
      }
    }
  }
`
