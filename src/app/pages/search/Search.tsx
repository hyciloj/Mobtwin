import React, {FC} from "react";
import Logout from "../../modules/auth/components/Logout";
import {Card1, Card2} from "../../../_theme/partials/content/cards";

export default function Search() {

    return (
        <>
            <Logout />
            <div className="grid-3">
                <Card1 />
                <Card2 />
                <Card1 />
            </div>
            <div className="grid-1-3">
                <Card1 />
                <Card1 />
            </div>
            <div className="grid-2-3">
                <Card1 />
                <Card1 />
            </div>
        </>
    )
}
