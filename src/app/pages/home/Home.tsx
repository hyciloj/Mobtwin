import React, {ReactNode, useEffect} from "react";
import {PlayStore, Section, AppStore, SteamGames} from "./components";


interface RowsInterface {
    name: "playStore" | "appStore" | "steam"
    component: ReactNode
}

export default function Home() {


    const _rows: RowsInterface[] = [
        {name: "steam", component: <SteamGames />},
        {name: "playStore", component: <PlayStore />},
        {name: "appStore", component: <AppStore />},
    ]

        return (
        <>
            {
                _rows.map((row, index) => {

                    return (
                        <Section row={row} key={index} />
                    )
                })
            }
        </>
    )
}