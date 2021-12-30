import {Container, Grid} from '@mui/material'
import login from '../../assets/icons/logo.svg'
import { Logo, Wrapper } from './login.styled'
import Form from './components/form/form.component'

export default function Login() {
    return (
        <>
            <Container>
                <Wrapper container justifyContent={'center'}>
                        <Grid container maxWidth={319.5} justifyContent={'center'}>
                            <Logo src={login} alt={'Netflix logo'} />
                            <Form />
                    </Grid>
                </Wrapper>
            </Container>
        </>
    )
}