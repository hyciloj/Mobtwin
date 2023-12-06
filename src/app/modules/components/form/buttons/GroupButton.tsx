import React, {FC} from "react";
import {KTSVG} from "../../../../../_theme/helpers";
import {PATH_DASHBOARD} from "../../../../routing/paths";
import {Link} from "react-router-dom";

const GroupButton: FC = () => {

    return (
        <>
            <div className="group-button">
                <button>
                    <span>free</span>
                </button>
                <Link to={"/plans"} className="active" target={"_blank"}>
                    <span>upgrade</span>
                </Link>
                {/*<button  */}
                <div className="glider" style={{left: `50%`, width: `50%`}}/>
            </div>
            <Link to={"/plans"} className="active" target={"_blank"}>
                <KTSVG path='/media/icons/duotune/general/gen053.svg'
                       className='group-icon'
                />
            </Link>

        </>

    );
};

export {GroupButton};
