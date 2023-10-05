import {FormikProps} from "../../../../config-global";
import React, {FC} from "react";
import clsx from "clsx";

interface InputComponentInterface extends FormikProps {
    label: string,
    type: string,
    id: string,
    placeholder: string,
}

const InputComponent: FC<InputComponentInterface> = ({formik, label, id, type, placeholder}) => {
    return (

        <div role="group" className="d-flex flex-column form-label-input">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type}
                // name={'email'}
                   placeholder={placeholder}
                   className={clsx(
                       'form-input',
                       {'is-invalid': formik.touched[id] && formik.errors[id]},
                       {'is-valid': formik.touched[id] && !formik.errors[id],}
                   )}
                   {...formik.getFieldProps(id)}
            />
            {formik.touched[id] && formik.errors[id] && (
                <div className='fv-plugins-message-container'>
                    <span role='alert' className="msg-error">{formik.errors[id]}</span>
                </div>
            )}
        </div>

    )
}

export {InputComponent}