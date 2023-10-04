import React, {Dispatch, FC} from "react";
import {toAbsoluteUrl} from "../../../../_theme/helpers";

type AuthButtonProps = {
    title: string
    url: string,
    width: string | number,
    alt: string
    height: string | number,
    className: string,
}

const AuthButton: FC<AuthButtonProps> = ({
                                             title,
                                             url,
                                             width,
                                             height,
                                             alt,
                                             className,
                                         }) => {

    return (
        <button type="button" className={className}>
            <img src={toAbsoluteUrl(url)}
                 alt={alt}
                 className='rounded me-3'
                 style={{width, height}}
            />
            <span className="text-capitalize">{title}</span>
        </button>
    )
}

export {AuthButton}