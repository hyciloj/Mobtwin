import React, {FC, useState} from "react";
import {Container} from "./Container";
import {useToggle} from "../../../hooks";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {InputComponent, SubmitComponent} from "../../components";
import {useParams, useLocation} from 'react-router-dom';
import {encryptEmail} from "../../../../_theme/helpers";

const initialValues = {
    password: '',
    passwordConfirmation: '',
}
const registrationSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .required('Password confirmation is required')
        .test('passwords-match', "Password and Confirm Password didn't match", function (value) {
            return this.parent.password === value;
        }),
})

interface formData {
    email: string;
    password: string;
}


export default function ResetPassword() {

    const [formData, setFormData] = useState<formData>({email: '', password: ''})
    const [loading, setLoading] = useState(false)
    const [isToggled, toggle] = useToggle(false);
    const dispatch = useDispatch()
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    // const encryptedEmail = encryptEmail({email})
    const token = searchParams.get('token');

    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true);

            try {
                let response;

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <Container>

            <div className="mb-10 bg-light-info p-8 rounded">
                <div className="d-flex flex-column align-items-center auth-info">
                    <span className="text-center _px-4">
                        We have sent a password reset code by email to {email}. Enter it below to reset your password
                    </span>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center mb-3">
                <InputComponent formik={formik} id={'password'} type={'password'} label={'password'}
                                placeholder={'******'}/>
            </div>
            <div className="d-flex flex-column align-items-center mb-3">
                <InputComponent formik={formik} id={'passwordConfirmation'} type={'password'}
                                label={'password confirmation'} placeholder={'******'}/>
            </div>

            <SubmitComponent formik={formik} labelBtn={"Reset password"} loading={loading}/>
        </Container>
    )
}

export {ResetPassword}