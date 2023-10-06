import React, {Dispatch, FC, ReactNode, SetStateAction, useState} from "react";
import {login, register} from "../redux/AuthCRUD";
import {useDispatch} from "react-redux";
import * as auth from "../redux/AuthRedux"
import {InputComponent, SubmitComponent} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {Container} from "./Container";
import {useToggle} from "../../../hooks";
import {ChildrenProps, FormikProps} from "../../../../config-global";

interface formData {
    email: string;
    password: string;
}


const images = {
    image1: "https://app.leonardo.ai/img/login-hero-images/Celestial.webp",
    image2: "https://app.leonardo.ai/img/login-hero-images/FemaleAdventurer5.webp"
}

type childProps = 'login' | 'register' | 'forgotPassword'

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(10, 'Minimum 10 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Minimum 8 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
})

const registerPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(10, 'Minimum 10 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
})

const initialValues = {
    email: '',
    password: '',
}

const initialValuesRegisterPassword = {
    email: '',
}


export default function Login() {

    const [formData, setFormData] = useState<formData>({email: 'admin@email.com', password: 'admin'})
    const [loading, setLoading] = useState(false)
    const [isToggled, toggle] = useToggle(false);
    const [child, setChild] = useState<childProps>('login')
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

                    const {message, message_code, status} = response.data;
                    console.log(message, message_code, status);
                } else if (child === 'forgotPassword') {
                    // Handle forgot password logic here
                    // response = await forgotPassword({ email: values.email });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        },
    });


    const formikRegisterPassword = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true);

            try {
                let response;

                if (child === 'register') {
                    console.log(values)
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        },
    });


    return (
        <Container>
            <form
                className='form w-100'
                onSubmit={formik.handleSubmit}
                noValidate
                id='kt_login_signin_form'
            >

                <div className="d-flex flex-column align-items-center mb-3">

                </div>

                {
                    child === 'login' && (
                        <>
                            <EmailPasswordComponent formik={formik} textInfo={"Sign in to your account"}>
                                <div className="d-flex flex-column mb-4">
                                    <span className="link-sm pt-2 cursor-pointer"
                                          onClick={() => setChild('forgotPassword')}>
                                        Forgot your password?
                                    </span>
                                </div>
                            </EmailPasswordComponent>

                            <SubmitComponent formik={formik} labelBtn={"Sign In"} loading={loading}/>


                            <button type={"button"} className="link-sm _py-4 text-end"
                                    onClick={() => setChild('register')}
                            >
                                Sign Up
                            </button>
                        </>
                    )
                }

                {
                    child === 'register' && (
                        <>
                            <EmailPasswordComponent formik={formik} textInfo={"Sign up with a new account"} />
                            <SubmitComponent formik={formik} labelBtn={"Sign Up"} loading={loading}/>

                            <button type={"button"} className="link-sm _py-4 text-end"
                                    onClick={() => setChild('login')}
                            >
                                Sign In
                            </button>
                        </>
                    )
                }

                {
                    child === 'forgotPassword' && (
                        <>

                            <div className="mb-10 bg-light-info p-8 rounded">
                                <div className="d-flex flex-column align-items-center auth-info">
                                    <span className="text-center _px-4">Enter your email below and we will send a message to reset your password</span>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center mb-3">
                                <InputComponent formik={formik} id={"email"} type={"email"} label={'email'}
                                                placeholder={'name@host.com'}/>
                            </div>

                            <SubmitComponent formik={formikRegisterPassword} labelBtn={"Reset my password"} loading={loading}/>

                            <div className="d-flex flex-column align-items-center mt-2 _p-2 ">
                                <button type={'button'} onClick={() => setChild('login')} className="">Cancel
                                </button>
                            </div>
                        </>
                    )
                }


            </form>
        </Container>
    )
}

interface EmailPasswordComponentInterface extends FormikProps {
    textInfo: string
    children?: ReactNode;
}

const EmailPasswordComponent: FC<EmailPasswordComponentInterface> = ({
                                                                         formik,
                                                                         textInfo,
                                                                         children
                                                                     }) => {
    return (
        <>
            <div className="mb-10 bg-light-info p-8 rounded">
                <div className="d-flex flex-column align-items-center auth-info">
                    <span>{textInfo}</span>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center mb-3">
                <InputComponent formik={formik} id={"email"} type={"email"} label={'email'}
                                placeholder={'name@host.com'}/>
            </div>
            <div className="d-flex flex-column align-items-center mb-2">
                <InputComponent formik={formik} id={"password"} type={"password"} label={'password'}
                                placeholder={'******'}/>
            </div>

            {
                children
            }
        </>
    )
}
