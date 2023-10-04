export interface FormDataLogin {
    email: string;
    password: string;
}

export interface FormDataRegister extends FormDataLogin{
    // firstName: string;
    // lastName: string;
    email: string;
    password: string;
    // passwordConfirmation: string;
}