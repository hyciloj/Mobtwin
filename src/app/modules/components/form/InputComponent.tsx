import {FormikProps} from "../../../../config-global";
import React, {FC} from "react";
import clsx from "clsx";

interface InputComponentInterface extends FormikProps {
    label: string,
    placeholder: string,
}

const InputComponent: FC<InputComponentInterface> = ({formik, label, placeholder}) => {
    return (

        <div role="group" className="d-flex flex-column form-label-input">
            <label htmlFor={label} className="form-label">{label}</label>
            <input type={label}
                // name={'email'}
                   placeholder={placeholder}
                   className={clsx(
                       'form-input',
                       {'is-invalid': formik.touched[label] && formik.errors[label]},
                       {'is-valid': formik.touched[label] && !formik.errors[label],}
                   )}
                   {...formik.getFieldProps(label)}
            />
            {formik.touched[label] && formik.errors[label] && (
                <div className='fv-plugins-message-container'>
                    <span role='alert' className="msg-error">{formik.errors[label]}</span>
                </div>
            )}
        </div>

    )
}

export {InputComponent}