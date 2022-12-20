import {
    FormRegister,
    StyleRegister,
    Button,
    Error,
    Input,
    LabelLogin,
    SpanEyeConfirm,
    SpanEyeRegister,
    ContentInput,
    LoginDiv,
} from '../../styles/addUser'
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Alert, Snackbar, Stack } from '@mui/material'
import Loading from '../Loading'
import userAPI from '../../services/getListUsers';
import { registerSchema } from '../../constants/registerSchema';

function AddUsers(props) {
    const [showPass, setShowPass] = useState(false)
    const [showPassConfirm, setShowPassConfirm] = useState(false)
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const {handleCloseModal} = props
    console.log('handleCloseModal', handleCloseModal)
    const handleClose = (
        event,
        reason
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(registerSchema) })

    const handleSignup = async (dt) => {
        error && setError('')
        delete dt.confirmPassword
        try {
            setLoading(true)

            const { data } = await userAPI.register(dt)
            setOpen(true)
            setTimeout(() => {
                window.location.reload(false);
                setLoading(false)
            }, 700)
        } catch (error) {
            setError("Email không hợp lệ")
            setLoading(false)
            setOpen(true)
        }
    }

    return (
        <>
            {loading ? <Loading /> : null}
            <FormRegister onSubmit={handleSubmit(handleSignup)} autoComplete="off">
                <Head>
                    <title>Admin - Thêm tài khoản</title>
                </Head>
                <StyleRegister>
                    <LoginDiv>
                        Thêm tài khoản
                    </LoginDiv>
                    <LabelLogin>
                        Họ và tên
                    </LabelLogin>
                    <Input
                        placeholder="Nhập họ và tên"
                        type="text"
                        autoFocus
                        {...register('fullName')}
                    />
                    {errors.fullName && (
                        <Error>{errors.fullName.message}</Error>
                    )}
                    <LabelLogin>Email</LabelLogin>
                    <Input placeholder="Nhập email" type="text" {...register('email')} />
                    {errors.email && (
                        <Error>{errors.email.message}</Error>
                    )}
                    <LabelLogin>
                        Tên tài khoản
                    </LabelLogin>
                    <Input
                        placeholder="Nhập tên tài khoản"
                        type="text"
                        autoComplete="new-password"
                        {...register('username')}
                    />
                    {errors.username && (
                        <Error>{errors.username.message}</Error>
                    )}
                    <LabelLogin>
                        Mật khẩu
                    </LabelLogin>
                    <ContentInput>

                        <Input
                            placeholder="Nhập mật khẩu"
                            defaultValue={''}
                            type={showPass ? 'text' : 'password'}
                            {...register('password')}
                        />

                        {showPass ? (
                            <SpanEyeRegister onClick={() => setShowPass(!showPass)}>
                                <VisibilityOffIcon />
                            </SpanEyeRegister>
                        ) : (
                            <SpanEyeRegister onClick={() => setShowPass(!showPass)}>
                                <RemoveRedEyeIcon />
                            </SpanEyeRegister>
                        )}
                    </ContentInput>
                    {errors.password && (
                        <Error>{errors.password.message}</Error>
                    )}
                    <LabelLogin>
                        Xác nhận mật khẩu
                    </LabelLogin>
                    <ContentInput>
                        <Input
                            placeholder="Nhập lại mật khẩu"
                            type={showPassConfirm ? 'text' : 'password'}
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && (
                            <Error>
                                {errors.confirmPassword.message}
                            </Error>
                        )}
                        {showPassConfirm ? (
                            <SpanEyeConfirm
                                onClick={() => setShowPassConfirm(!showPassConfirm)}
                            >
                                <VisibilityOffIcon />
                            </SpanEyeConfirm>
                        ) : (
                            <SpanEyeConfirm
                                onClick={() => setShowPassConfirm(!showPassConfirm)}
                            >
                                <RemoveRedEyeIcon />
                            </SpanEyeConfirm>
                        )}
                    </ContentInput>
                    <Stack spacing={2} sx={{ width: '100%', paddingTop: '30px' }}>
                        <Button type="submit">
                            Thêm tài khoản
                        </Button>

                        <Snackbar
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            {!error ? (
                                <Alert
                                    onClose={handleClose}
                                    severity="success"
                                    sx={{ width: '100%' }}
                                >
                                    Thêm tài khoản thành công
                                </Alert>
                            ) : (
                                <Alert severity="error" color="error">
                                    {error}
                                </Alert>
                            )}
                        </Snackbar>
                    </Stack>
                </StyleRegister>
            </FormRegister>
        </>
    )
}
export default AddUsers;
