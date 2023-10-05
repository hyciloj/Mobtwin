import React, {FC, useState} from "react";
import {Container} from "./Container";
import {useToggle} from "../../../hooks";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {InputComponent, SubmitComponent} from "../../components";
import {useParams, useLocation} from 'react-router-dom';

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

    // Get the current location object
    const location = useLocation();

    // Extract the search string (query parameters) from the location
    const searchParams = new URLSearchParams(location.search);

    // Get the values of the 'email' and 'token' query parameters
    const email = searchParams.get('email');
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