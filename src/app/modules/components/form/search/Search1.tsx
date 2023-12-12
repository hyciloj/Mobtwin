import React from "react";
import {KTSVG, toAbsoluteUrl} from "../../../../../_theme/helpers";

const Search1 = () => {

    return (
        <div className="search">
            <label htmlFor="search">
                <KTSVG path={toAbsoluteUrl('/media/icons/others/search.svg')} />
            </label>
            <input type="text" name="search" id="search" placeholder="type anything"/>
        </div>
    )
}

export {Search1}