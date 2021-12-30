import styled from 'styled-components'

export const ErrorDescription = styled.div`
    height: 18px;
    text-align: center;
    color: ${props => props.theme.palette.core.primary};
    font-size: bold;
    font-size: 13px;

    .error-empty{
        padding: 9px;
    }

`