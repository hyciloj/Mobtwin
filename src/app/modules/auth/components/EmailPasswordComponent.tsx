import {FormikProps} from "../../../../config-global";
import React, {FC, ReactNode} from "react";
import {InputComponent} from "../../components";

interface EmailPasswordComponentInterface extends FormikProps {
    children?: ReactNode;
}

const EmailPasswordComponent: FC<EmailPasswordComponentInterface> = ({
                                                                         formik,
                                                                         children
                                                                     }) => {

    return (
        <>
            {/*<div className="mb-10 p-8 rounded">*/}
            {/*    <div className="d-flex flex-column align-items-center auth-info" style={{borderColor: bg}}>*/}
            {/*        <span>{msg}</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

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

export {EmailPasswordComponent}