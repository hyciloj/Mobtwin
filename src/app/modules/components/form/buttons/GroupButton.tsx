import React, {FC, useState, useMemo} from "react";
import {KTSVG, toAbsoluteUrl} from "../../../../../_theme/helpers";

const GroupButton: FC = () => {

    return (
        <>
            <div className="group-button">
                <button>
                    <span>free</span>
                </button>
                <button className="active">
                    <span>upgrade</span>
                </button>
                <div className="glider" style={{left: `50%`, width: `50%`}}/>
            </div>
            <KTSVG path='/media/icons/duotune/general/gen053.svg'
                   className='group-icon'
            />
        </>

    );
};

export {GroupButton};
