import styled from 'styled-components'

export const CardItem = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 0.5fr;
  grid-template-rows: 0.25fr 1fr 1fr 0fr;
  grid-template-areas:
    'Date Date Date'
    'Icon Name Value'
    'Icon Email Merchant'
    'EditBox EditBox EditBox';
  margin: 0 auto;
  padding: 0.5em;
  max-width: 40%;
  cursor: pointer;

  :hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.23);
  }

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

  .EditBox {
    grid-area: EditBox;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr;
    grid-template-areas: 'Comment Image' 'Save Save';

    .Comment {
      grid-area: Comment;
    }

    .Image {
      grid-area: Image;
    }

    .Save {
      grid-area: Save;
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
    justify-self: end;
    font-family: ${(props) => props.theme.fontSecondary};
    color: ${(props) => props.theme.textSecondary};
  }

  .Date {
    grid-area: Date;
    justify-self: end;
    font-size: 0.85em;
    padding: 0.1em;
    font-family: ${(props) => props.theme.fontMain};
    color: ${(props) => props.theme.textSecondary};
  }
`
