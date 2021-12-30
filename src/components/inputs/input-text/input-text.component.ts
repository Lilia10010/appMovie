import styled from 'styled-components';

const InputText = styled.input`
    width: calc(100% - 16px);
    padding: 8px;
    margin: 0 0 12px;
    border: 0;
    border-radius: ${props => props.theme.border.radius['5']};
    background: ${props => props.theme.palette.core.whiteBackground};
`

export default InputText