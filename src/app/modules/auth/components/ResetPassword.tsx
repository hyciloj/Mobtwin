import React, {FC, useEffect, useState} from "react";
import {Container} from "./Container";
import {useFormik} from "formik";
import * as Yup from "yup";
import {InputComponent, SubmitComponent} from "../../components";
import {useNavigate, useLocation, Navigate} from 'react-router-dom';
import {encryptEmail} from "../../../../_theme/helpers";
import {PATH_AUTH} from "../../../routing/paths";

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
    let navigate = useNavigate();
    const [info, setInfo] = useState({
        show: false,
        msg: "",
        bg: "",
    });
    const searchParams = new URLSearchParams(location.search);

    const [paramsUrl, setParamsUrl] = useState({
        email: '',
        token: '',
    })

    useEffect(() => {
        const email = searchParams.get('email');
        const encryptedEmail = encryptEmail({email})
        const token = searchParams.get('token');

        setParamsUrl({email: email || '', token: token || ''})

        const oldSearchParams = searchParams.toString();

        searchParams.delete('token');
        searchParams.delete('email');


        // Build the new search string without the removed params
        const newSearchParams = searchParams.toString();

        // Check if the search string has changed before updating the URL
        if (location.search !== `?${newSearchParams}`) {
            // Use navigate to update the URL without adding a new entry to the navigation history
            navigate({
                pathname: location.pathname,
                search: newSearchParams,
            },
                { replace: true }
                );
        }
        }, [])


    const formik = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: async (values, {setStatus, setSubmitting}) => {
            setLoading(true);

            try {
                let response;
                if (paramsUrl.email && paramsUrl.token) {
                    // response = await resetPassword({
                    //     email: paramsUrl.email,
                    //     password: values.password,
                    //     password_confirmation: values.passwordConfirmation,
                    //     token: paramsUrl.token
                    // })

                    // const {status} = response
                    // if (status === 200) {
                    //
                    //     formik.resetForm();
                    //     showInfoMessage("your password has been successfully modified", "#3cdd78")
                    //     setTimeout(() => {
                    //         navigate(PATH_AUTH.login);
                    //         window.location.reload()
                    //     }, 2500);
                    //
                    // }

                }

            } catch (error: any) {
                const { data } = error.response;
                showInfoMessage(data.errors.email, "#F56565")

            } finally {
                setLoading(false);
            }
        },
    });

    const showInfoMessage = (msg: string, bg: string, duration = 2000) => {
        setInfo({ show: true, msg, bg });
        setTimeout(() => {
            setInfo({ show: false, msg, bg });
        }, duration);
    };

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
                {
                    info.show
                        ? (
                            <div className="mb-10 p-8 rounded">
                                <div className="d-flex flex-column align-items-center auth-info">
                                    <span>{info.msg}</span>
                                </div>
                            </div>
                        )
                        : <SubmitComponent formik={formik} labelBtn={"Reset password"} loading={loading}/>
                }
            </form>
        </Container>
    )
}

export {ResetPassword}