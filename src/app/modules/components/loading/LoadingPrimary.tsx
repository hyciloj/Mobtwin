import React from "react";
import {toAbsoluteUrl} from "../../../../_theme/helpers";

const LoadingPrimary = () => {

    return (
        <div className="loading-primary">
            <img src={toAbsoluteUrl('/media/logos/favicon.png')}
                 alt='mobtwin'
                 className=''
            />
        </div>
    )
}

export {LoadingPrimary}