import React, {FC} from "react";
import Logout from "../../modules/auth/components/Logout";
import {Card1} from "../../../_theme/partials/content/cards";
import {ChartsWidget1, ChartsWidget2} from "../../../_theme/partials";

export default function Charts() {

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <ChartsWidget1 className={""} />
                </div>
                <div className="col-6">
                    <ChartsWidget2 className={""} />
                </div>
            </div>
        </>
    )
}
