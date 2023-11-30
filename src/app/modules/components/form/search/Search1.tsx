import React from "react";
import {KTSVG, toAbsoluteUrl} from "../../../../../_theme/helpers";

const Search1 = () => {

    return (
        <div className="search">
            <label htmlFor="search">
                <KTSVG path={toAbsoluteUrl('/media/icons/duotune/general/gen004.svg')} />
            </label>
            <input type="text" name="search" id="search"/>
        </div>
    )
}

export {Search1}