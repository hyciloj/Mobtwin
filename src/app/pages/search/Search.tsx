import React, {FC} from "react";
import Logout from "../../modules/auth/components/Logout";
import {CardImage} from "../component";

export default function Search() {

    return (
        <>
            <Logout />
            <div className={"_pt-10"}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <CardImage />

                    </div>
                </div>
            </div>
        </>
    )
}
