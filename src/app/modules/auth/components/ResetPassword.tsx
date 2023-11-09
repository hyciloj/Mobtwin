import React, {FC, useEffect, useState} from "react";
import {Container} from "./Container";
import {useToggle} from "../../../hooks";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {InputComponent, SubmitComponent} from "../../components";
import {useParams, useLocation, Navigate} from 'react-router-dom';
import {encryptEmail} from "../../../../_theme/helpers";
import {EmailPasswordComponent} from "./EmailPasswordComponent";
import {login, resetPassword} from "../redux/AuthCRUD";
import {PATH_AUTH, ROOTS_AUTHENTICATION} from "../../../routing/paths";

const initialValues = {
    password: '',
    passwordConfirmation: '',
}
const registrationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Minimum 8 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .required('Password confirmation is required')
        .test('passwords-match', "Password and Confirm Password didn't match", function (value) {
            return this.parent.password === value;
        })
})

interface formData {
    password: string;
    passwordConfirmation: string;
}


export default function ResetPassword() {

    const [formData, setFormData] = useState<formData>({
        password: '',
        passwordConfirmation: '',
    })
    const [loading, setLoading] = useState(false)
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const encryptedEmail = encryptEmail({email})
    const token = searchParams.get('token');


    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true);

            try {
                let response;
                if (email && token) {
                    response = await resetPassword({
                        email,
                        password: values.password,
                        password_confirmation: values.passwordConfirmation,
                        token
                    })

                    const {status} = response
                    if (status === 200) {

                        console.log({status})
                        return <Navigate replace to={ROOTS_AUTHENTICATION}/>
                    }

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
                id='kt_reset_password_form'
            >
                <div className="d-flex flex-column align-items-center mb-3">
                    <InputComponent formik={formik} id={"password"}
                                    type={"password"}
                                    label={'password'}
                                    placeholder={'******'}
                    />
                </div>
                <div className="d-flex flex-column align-items-center mb-2">
                    <InputComponent formik={formik} id={"passwordConfirmation"}
                                    type={"password"}
                                    label={'password confirmation'}
                                    placeholder={'******'}
                    />
                </div>
                <SubmitComponent formik={formik} labelBtn={"Reset password"} loading={loading}/>
            </form>
        </Container>
    )
}

export {ResetPassword}