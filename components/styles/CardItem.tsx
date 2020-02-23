import styled from 'styled-components'

export const CardItem = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 1fr 0fr;
  grid-template-areas:
    'Date Date Date'
    'Icon Name Value'
    'Icon Email Merchant'
    'EditBox EditBox EditBox';
  margin: 0 auto;
  padding: 0.5em;
  max-width: 60%;
  cursor: pointer;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  @media only screen and (max-device-width: 568px) {
  }

  .Icon {
    grid-area: Icon;
    width: 50px;
    justify-self: right;
  }

  .Name {
    grid-area: Name;
  }

  .Email {
    grid-area: Email;
  }

  .EditBox {
    grid-area: EditBox;
  }

  .Value {
    grid-area: Value;
  }

  .Merchant {
    grid-area: Merchant;
  }

  .Date {
    grid-area: Date;
    justify-self: end;
  }
`
