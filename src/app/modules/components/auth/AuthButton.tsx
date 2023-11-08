import React, {Dispatch, FC} from "react";
import {toAbsoluteUrl} from "../../../../_theme/helpers";
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../../routing/paths";

type AuthButtonProps = {
    title: string
    url: string,
    img: string,
    width: string | number,
    alt: string
    height: string | number,
    className: string,
}

const REACT_APP_CORE_URL = process.env.REACT_APP_CORE_URL

const AuthButton: FC<AuthButtonProps> = ({
                                             title,
                                             url,
                                             img,
                                             width,
                                             height,
                                             alt,
                                             className,
                                         }) => {

    return (


        <Link to={`${REACT_APP_CORE_URL}${url}`}
              className={className}
        >
            <img src={toAbsoluteUrl(img)}
                 alt={alt}
                 className='rounded me-3'
            />
            <span className="text-capitalize">{title}</span>
        </Link>

        // <button type="button" className={className}>
        //     <img src={toAbsoluteUrl(url)}
        //          alt={alt}
        //          className='rounded me-3'
        //          style={{width, height}}
        //     />
        //     <span className="text-capitalize">{title}</span>
        // </button>
    )
}

export {AuthButton}