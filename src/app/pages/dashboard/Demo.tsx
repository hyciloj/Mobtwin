import React, {FC} from "react";
import {Link} from "react-router-dom";
import {PATH_AUTH, ROOT_DEMO} from "../../routing/paths";

const Demo: FC = () => {

    return (
        <>
            <h1>Demo Page</h1>
            <Link to={PATH_AUTH.login}>Login</Link>
        </>
    )
}

export {Demo}