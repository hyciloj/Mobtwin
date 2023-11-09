import React, {FC, ReactNode, useState} from "react";
import {login, register, requestPassword} from "../redux/AuthCRUD";
import {useDispatch} from "react-redux";
import * as auth from "../redux/AuthRedux"
import {InputComponent, SubmitComponent} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {Container} from "./Container";
import {useToggle} from "../../../hooks";
import {FormikProps} from "../../../../config-global";
import {EmailPasswordComponent} from "./EmailPasswordComponent";
import {AxiosError} from "axios";
import {useTranslation} from "react-i18next";

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

    const [formData, setFormData] = useState<formData>({email: 'admin@email.com', password: 'admin'})
    const [loading, setLoading] = useState(false);
    const [loadingResetPassword, setLoadingResetPassword] = useState(false);
    const [isToggled, toggle] = useToggle(false);
    const [info, setInfo] = useState({
        show: false,
        msg: ""
    });
    const [child, setChild] = useState<ChildProps>('login')

    const {  t: translate } = useTranslation();


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

            try {
                let response;

                if (child === 'login') {
                    response = await login({email: values.email, password: values.password});

                    const {message_code, status, user, token} = response.data;
                    const {id, name, email, role, workspace} = user;

                    dispatch(auth.actions.login({accessToken: token}))

                } else if (child === 'register') {
                    response = await register({email: values.email, password: values.password});

                    const {status} = response.data;

                    console.log("try" , response)

                    if (status === 200) {
                        setInfo({show: true, msg: "we sent a link to the mailbox"})
                        setTimeout(() => {
                            setInfo({show: false, msg: ""})
                        }, 2000)
                    }
                }
            } catch (error) {
                console.log("catch: ", error)

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
                    console.log("formikResetPassword: ", status)
                    setInfo({show: true, msg: "we sent a link to the mailbox"})
                    setTimeout(() => {
                        setInfo({show: false, msg: ""})
                    }, 2000)
                }


            } catch (err: any) {
                console.log({err})
                setInfo({
                    show: true, msg: 'demo.title'
                })
            } finally {
                setLoadingResetPassword(false);
            }
        },
    });


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

                                        <SubmitComponent formik={formik} labelBtn={"Sign In"} loading={loading}/>

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
                                                    <div className="d-flex flex-column align-items-center auth-info">
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
                                        <div className="d-flex flex-column align-items-center auth-info">
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

