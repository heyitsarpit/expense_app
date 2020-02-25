import styled from 'styled-components'

export const CardItem = styled.div`
  cursor: pointer;
  max-width: 40%;
  min-width: 30%;
  margin: 0 auto;
  border: transparent;
  border-bottom: solid 1px ${(props) => props.theme.colorUnfocused};
  :hover {
    border-color: ${(props) => props.theme.textPrimary};
  }

  @media only screen and (max-width: 1052px) {
    max-width: 80%;
    min-width: 40%;
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
    }

    .Name {
      grid-area: Name;
      font-family: ${(props) => props.theme.fontMain};
      font-weight: bold;
      font-size: 1.2em;
    }

    .Email {
      grid-area: Email;
      font-size: 0.9em;
      font-family: ${(props) => props.theme.fontSecondary};
      color: ${(props) => props.theme.textSecondary};
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
`
