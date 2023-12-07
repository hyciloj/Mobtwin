import React, {FC} from "react";
import {KTSVG} from "../../../../_theme/helpers";

type badgeProps = {
    color: string
    size: string
    label: string
    icon?: string
}

const Badge: FC<badgeProps> = ({color, size, label, icon}) => {

    return (
        <div className={`badge badge-${color} badge-${size}`}>
            <span className="badge-label">{label}</span>
            {icon && <KTSVG path='/media/icons/duotune/arrows/arr067.svg' className='badge-icon'/>}
        </div>
    )
}


export {Badge}