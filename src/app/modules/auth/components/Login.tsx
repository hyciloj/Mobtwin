import React, {FC, ReactNode, useState} from "react";
import {login, register, requestPassword} from "../redux/AuthCRUD";
import {useDispatch} from "react-redux";
import * as auth from "../redux/AuthRedux"
import {InputComponent, SubmitComponent} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {Container} from "./Container";
import {EmailPasswordComponent} from "./EmailPasswordComponent";
import {useTranslation} from "react-i18next";
import {isValidToken, setSession} from "../../../../_theme/helpers";

interface formData {
    email: string;
    password: string;
}

type ChildProps = 'login' | 'register' | 'forgotPassword'

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(10, 'Minimum 10 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    password: Yup.string()
        .min(3, 'Minimum 8 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
})

const resetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(10, 'Minimum 10 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required')
})

const initialValues = {
    email: '',
    password: '',
}

const initialValuesResetPassword = {
    email: '',
}

export default function Login() {

    const [loading, setLoading] = useState(false);
    const [loadingResetPassword, setLoadingResetPassword] = useState(false);
    const [info, setInfo] = useState({
        show: false,
        msg: "",
        bg: "",
    });
    const [child, setChild] = useState<ChildProps>('login')

    const {t: translate} = useTranslation();


    // const [info, setInfo] = useState<PropsInfo>({
    //     msg: childInfo[defaultChild],
    //     bg: "#3cdd78",
    // });
    //
    // const updateInfo = useCallback(() => {
    //     setInfo({
    //         msg: childInfo[child],
    //         bg: "#3cdd78",
    //     });
    // }, [child]);
    //
    // useEffect(() => {
    //     updateInfo();
    // }, [updateInfo]);


    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true);
            const emailValue = values.email;
            const passwordValue = values.password;

            try {
                let response;

                if (child === 'login') {
                    response = await login({email: emailValue, password: passwordValue});
                    const {token} = response.data;
                    dispatch(auth.actions.login(token))
                } else if (child === 'register') {

                    response = await register({email: emailValue, password: passwordValue});
                    const {status} = response.data;
                    if (status === 200) {
                        showInfoMessage("we sent a link to the mailbox", "#3cdd78")
                    }
                }
            } catch (error: any) {

                handleApiError(error, child);
            } finally {
                setLoading(false);
            }
        },
    });

    const formikResetPassword = useFormik({
        initialValues: initialValuesResetPassword,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoadingResetPassword(true);

            try {
                let response;
                response = await requestPassword({email: values.email});
                const {status} = response.data;

                if (status === 200) {
                    setInfo({show: true, msg: "we sent a link to the mailbox", bg: "#3cdd78"})
                    setTimeout(() => {
                        setInfo({show: false, msg: "", bg: ""})
                    }, 2000)
                }
            } catch (error: any) {

                handleApiError(error, child, );
            } finally {
                setLoadingResetPassword(false);
            }
        },
    });

    const showInfoMessage = (msg: string, bg: string, duration = 2000) => {
        setInfo({ show: true, msg, bg });
        setTimeout(() => {
            setInfo({ show: false, msg, bg });
        }, duration);
    };

    const handleApiError = (error: any, child: ChildProps) => {
        const { data } = error.response;
        let msg;

        if (child === 'login') {
            msg = data.message;
        } else if (child === 'register') {
            msg = data.errors.email[0];
        } else if (child === 'forgotPassword') {
            msg = data.errors.email;
        }

        showInfoMessage(msg, "#F56565");
    };

    return (
        <Container>
            {
                child !== "forgotPassword"
                    ? (
                        <form
                            className='form w-100'
                            onSubmit={formik.handleSubmit}
                            noValidate
                            id='kt_login_signin_form'
                        >
                            {
                                child === 'login' && (
                                    <>
                                        <EmailPasswordComponent formik={formik}
                                        >
                                            <div className="d-flex flex-column mb-1 mb-md-2">
                                                <span className="link" onClick={() => setChild('forgotPassword')}>
                                                    Forgot your password?
                                                </span>
                                            </div>
                                        </EmailPasswordComponent>

                                        {
                                            info.show
                                                ? <div className="mt-4 p-8 rounded">
                                                    <div className="d-flex flex-column align-items-center auth-info" style={{
                                                        borderColor: info.bg,
                                                        color: info.bg,
                                                    }}>
                                                        <span>{info.msg}</span>
                                                    </div>
                                                </div>
                                                : <SubmitComponent formik={formik} labelBtn={"Sign In"} loading={loading}/>
                                        }


                                        <div className="row mt-1">
                                            <div className="col-12 d-flex justify-content-center align-items-center">
                                                <a href="#" className="link"
                                                   onClick={() => setChild('register')}
                                                >
                                                    Need an account? Sign Up
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                )
                            }

                            {
                                child === 'register' && (
                                    <>
                                        <EmailPasswordComponent formik={formik}
                                        />
                                        {
                                            info.show
                                                ? <div className="mb-10 p-8 rounded">
                                                    <div className="d-flex flex-column align-items-center auth-info" style={{
                                                        borderColor: info.bg,
                                                        color: info.bg,
                                                    }}>
                                                        <span>{info.msg}</span>
                                                    </div>
                                                </div>
                                                : <SubmitComponent formik={formik} labelBtn={"Sign Up"} loading={loading}/>
                                        }
                                        <div className="row mt-1">
                                            <div className="col-12 d-flex justify-content-center align-items-center">
                                                <a href="#" className="link"
                                                   onClick={() => setChild('login')}
                                                >
                                                    Sign In
                                                </a>
                                            </div>
                                        </div>

                                    </>
                                )
                            }


                        </form>)
                    : (
                        <form
                            className='form w-100'
                            onSubmit={formikResetPassword.handleSubmit}
                            noValidate
                            id='kt_reset_password_form'
                        >
                            <div className="d-flex flex-column align-items-center mb-3">
                                <InputComponent formik={formikResetPassword}
                                                id={"email"}
                                                type={"email"} label={'email'}
                                                placeholder={'name@host.com'}
                                />
                            </div>

                            {
                                info.show
                                    ? <div className="mb-10 p-8 rounded">
                                        <div className="d-flex flex-column align-items-center auth-info"style={{
                                            borderColor: info.bg,
                                            color: info.bg,
                                        }}>
                                            <span>{translate(info.msg)}</span>
                                        </div>
                                    </div>
                                    : (
                                        <>
                                            <SubmitComponent formik={formikResetPassword}
                                                             labelBtn={"Reset my password"}
                                                             loading={loadingResetPassword}
                                            />

                                            <div className="d-flex flex-column align-items-center mt-2 _p-2 ">
                                                <button type={'button'} onClick={() => setChild('login')} className="">Cancel
                                                </button>
                                            </div>
                                        </>
                                    )
                            }
                        </form>
                    )
            }

        </Container>
    )
}