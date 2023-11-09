export interface FormDataLogin {
    email: string;
    password: string;
}

export interface FormDataRegister extends FormDataLogin{
    email: string;
    password: string;
}

export interface FormDataResetPassword extends FormDataLogin{
    token: string;
    password_confirmation: string;
}