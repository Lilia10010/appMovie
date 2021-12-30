import styled from 'styled-components'
import { Grid } from '@mui/material'

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    align-items: center;
`
export const Logo = styled.img`
    margin: 0 0 128px;
    max-width: 100%;


    @media(max-height: 400px) {
        margin: 0 0 50px;
}
`