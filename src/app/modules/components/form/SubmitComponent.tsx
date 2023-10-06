import {FormikProps} from "../../../../config-global";
import React, {FC} from "react";

interface SubmitComponentProps extends FormikProps {
    labelBtn: string,
    loading: boolean,
}

const SubmitComponent: FC<SubmitComponentProps> = ({
                                                       formik,
                                                       labelBtn,
                                                       loading,
                                                   }) => {

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <button type='submit'
                        id='kt_sign_in_submit'
                        className='main_button-xl'
                        disabled={formik.isSubmitting || !formik.isValid}
                >
                    {!loading && <span className=''>{labelBtn}</span>}
                    {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                            Please wait...
                            <span className='spinner-border spinner-border-sm align-middle ms-2'/>
                        </span>
                    )}
                </button>
            </div>
        </>
    )
}

export {SubmitComponent}