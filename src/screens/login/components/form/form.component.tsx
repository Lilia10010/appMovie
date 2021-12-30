import { useCallback, useState } from 'react'
import Button from '../../../../components/buttons/button/button.component'
import InputText from '../../../../components/inputs/input-text/input-text.component'
import * as yup from 'yup'
import { ErrorMessage } from './form.types'
import { ErrorDescription } from './form.styled'
import { userActions } from '../../../../store/user/user.slice'
import { useDispatch } from 'react-redux'

const errorInitial = ''

export default function Form() {
    const [data, setData] = useState({ email: '', password: ''})
    const [error, setError] = useState(errorInitial)

    const dispatch = useDispatch()

    const resetError = useCallback(
        () => setError(errorInitial),
        []
    )

    const handleChange = useCallback(
        (event: any) => setData(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
    })),
    [setData]
    )
    
    const validation = useCallback(
        async () => {
            const schema = yup.object().shape({
                password: yup.string().required(ErrorMessage.RequiredPassword),
                email: yup.string().required(ErrorMessage.RequiredEmail).email(ErrorMessage.EmailBadFormat),
            })

            try {
                await schema.validate(data);
                resetError();
                console.log(true);

                return true;

            } catch (error) {
                // @ts-ignore
                setError(error.errors[0]);
                
                return false
            }
        },
        [data, setError]
    )

    const onSubmit = useCallback(
        async () => {
            if(await validation()) {
                dispatch(userActions.login(data))
            }
            console.log(data)
        },
        [validation, data]
    )


    return (
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={(evento): void => handleChange(evento)} />
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={(evento) => handleChange(evento)} />
            <ErrorDescription><span className={!error ? 'error-empty' : ''}>{error}</span></ErrorDescription>
            <Button primary onClick={onSubmit}>Entrar</Button>        
        </>
    )
}