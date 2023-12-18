// ROOT PATH AFTER LOGIN SUCCESSFUL
import {PATH_BETA, PATH_DASHBOARD} from "./app/routing/paths";
import React from "react";
import {FieldInputProps, FormikErrors, FormikTouched, FormikValues} from "formik/dist/types";
import {FieldConfig} from "formik/dist/Field";

export const CORE_API_URL = process.env.REACT_APP_CORE_API_URL

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.home;
export const PATH_AFTER_LOGIN_BETA = PATH_BETA;
export const PATH_BEFORE_LOGIN = '/';

export const ACCESS_TOKEN = 'accessToken';

export type ChildrenProps = {
    children: React.ReactNode
}

export type FormikProps = {
    formik: {
        isSubmitting: boolean;
        isValid: boolean;
        errors: FormikErrors<FormikValues>;
        touched: FormikTouched<FormikValues>;
        getFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>;
    },
}