import React, {useState} from "react";
import {login, register} from "../redux/AuthCRUD";
import {useDispatch} from "react-redux";
import * as auth from "../redux/AuthRedux"
import {InputComponent, SubmitComponent} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {Container} from "./Container";
import {useToggle} from "../../../hooks";

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

const initialValues = {
    email: '',
    password: '',
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
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);

            try {
                let response;

                if (child === 'login') {
                    response = await login({ email: values.email, password: values.password });

                    const { message_code, status, user, token } = response.data;
                    const { id, name, email, role, workspace } = user;

                    dispatch(auth.actions.login({accessToken: token}))

                } else if (child === 'register') {
                    response = await register({ email: values.email, password: values.password });

                    const { message, message_code, status } = response.data;
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
                            <div className="d-flex flex-column align-items-center mb-3">
                                <InputComponent formik={formik} id={"email"} type={"email"} label={'email'} placeholder={'name@host.com'}/>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <InputComponent formik={formik} id={"password"} type={"password"} label={'password'} placeholder={'******'}/>
                            </div>

                            <div className="d-flex flex-column align-items-center">
                                <p className="link-sm pt-1 cursor-pointer" onClick={() => setChild('forgotPassword')}>
                                    Forgot your password?
                                </p>

                            </div>

                            <SubmitComponent formik={formik} labelBtn={"Sign In"} loading={loading}/>

                            <button type={"button"} className="link-sm _pt-2 text-end"
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
                            <div className="d-flex flex-column align-items-center mb-3">
                                <InputComponent formik={formik} id={"email"} type={"email"} label={'email'} placeholder={'name@host.com'}/>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-3">
                                <InputComponent formik={formik} id={"password"} type={"password"} label={'password'} placeholder={'******'}/>
                            </div>

                            <SubmitComponent formik={formik} labelBtn={"Sign Up"} loading={loading}/>

                            <button type={"button"} className="link-sm _pt-2 text-end"
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
                            <div className="d-flex flex-column align-items-center mb-3">
                                <InputComponent formik={formik} id={"email"} type={"email"} label={'email'} placeholder={'name@host.com'}/>
                            </div>

                            <SubmitComponent formik={formik} labelBtn={"Reset my password"} loading={loading}/>

                            <div className="d-flex flex-column align-items-center mt-2 _p-2 ">
                                <button type={'button'} onClick={() => setChild('login')} className={'link-md'}>Cancel</button>
                            </div>
                        </>
                    )
                }


            </form>
        </Container>
    )
}