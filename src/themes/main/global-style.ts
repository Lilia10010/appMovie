import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle<{theme: typeof theme}>`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&family=Montserrat:wght@300;400;500;600;700&display=swap');

    body {
        font-family: 'JetBrains Mono', monospace;
        background: ${props => props.theme.palette.core.secondary};
    }
`
