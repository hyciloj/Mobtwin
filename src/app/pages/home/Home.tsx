import {Card1, Card2} from "../../../_theme/partials/content/cards";
import React from "react";

export default function Home() {

    return (
        <>
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