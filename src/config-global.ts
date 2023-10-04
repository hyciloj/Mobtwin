// ROOT PATH AFTER LOGIN SUCCESSFUL
import {PATH_DASHBOARD} from "./app/routing/paths";
import React from "react";
import {FieldInputProps, FormikErrors, FormikTouched, FormikValues} from "formik/dist/types";
import {FieldConfig} from "formik/dist/Field";

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.search;
export const PATH_BEFORE_LOGIN = '/';

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