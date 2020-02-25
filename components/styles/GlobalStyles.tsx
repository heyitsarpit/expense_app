import { createGlobalStyle } from 'styled-components'

import { Theme } from './Theme'

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    body, html{
        width: 100%;
        height: 100%;
      background: ${(props) => props.theme.bgColor};

    }

`
// color: ${(props) => props.theme.textPrimary};
export default GlobalStyles
