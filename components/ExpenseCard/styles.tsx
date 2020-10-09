import styled from 'styled-components'

export const CardItem = styled.a`
  cursor: pointer;
  margin: 0 auto;
  border: transparent;
  text-decoration: none;
  display: block;

  color: inherit;
  border-bottom: solid 1px ${(props) => props.theme.colorUnfocused};
  :hover {
    border-color: ${(props) => props.theme.textPrimary};
  }

  .grid-container {
    display: grid;
    grid-template-columns: 0fr 1fr 0.5fr;
    grid-template-rows: 0.25fr 1fr 1fr 0fr;
    grid-template-areas:
      'Date Date Date'
      'Icon Name Value'
      'Icon Email Merchant';

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
      font-size: 1.2em;
    }

    .Email {
      grid-area: Email;
      font-size: 0.9em;
      font-family: ${(props) => props.theme.fontSecondary};
      color: ${(props) => props.theme.textSecondary};
      text-decoration: none;
    }

    .Value {
      grid-area: Value;
      justify-self: end;
      font-family: ${(props) => props.theme.fontMain};
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
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    .grid-container {
      .Icon {
        --size: 1.5em;
        width: var(--size);
        height: var(--size);
        font-size: 1em;
      }
      .Name {
        font-size: 1em;
      }
      .Value {
        font-size: 1em;
      }
      .Merchant {
        font-size: 0.8em;
      }
      .Email {
        font-size: 0.7em;
      }
      .Date {
        font-size: 0.8em;
      }
    }
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    .grid-container {
      .Icon {
        --size: 1.5em;
        width: var(--size);
        height: var(--size);
        font-size: 1.2em;
      }
      .Name {
        font-size: 1.1em;
      }
      .Value {
        font-size: 1.1em;
      }
      .Merchant {
        font-size: 0 75em;
      }
      .Email {
        font-size: 0.7em;
      }
      .Date {
        font-size: 0.75em;
      }
    }
  }
`
