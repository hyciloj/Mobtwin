import React, {FC} from "react";

const Toolbar: FC = () => {

    const number = 1234512345;
    const digits = String(number)
        .split('')

    return (
        <div className='toolbar' id='kt_toolbar'>
            <div id='kt_toolbar_container' className='d-flex flex-stack'>

            </div>
        </div>
    )
}

export {Toolbar}