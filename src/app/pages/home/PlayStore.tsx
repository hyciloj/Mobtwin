import React from "react";
import {Variants} from "../../modules/components/framer-motion";
import {useQuery} from "@apollo/client";
import {Card1, Card3} from "../../../_theme/partials/content/cards";
import {TablesWidget1} from "../../../_theme/partials/widgets";
import {_Divide, _Shuffle} from "../../functions";
import {G_App_Data, G_APPS_IMG} from "../../requests";


const PlayStore = () => {

    const {loading, error, data} = useQuery<G_App_Data>(G_APPS_IMG, {
        variables: {filters: {}},
    });

    if (data) {
        const {g_apps} = data

        const images = _Divide(g_apps, 4)

        const components = _Shuffle([
            <Card1 images={["1", "2", "3", "4", "5"]}/>,
            <Card3 images={images}/>,
            <Card1 images={["1", "2", "3", "4", "5"]}/>,
            <Card1 images={null}/>,
            <TablesWidget1/>,
            <Card1 images={null}/>,
        ])

        return (
            <Variants childes={components} className={"grid-3"}/>
        )
    }
    return (
        <></>
    )
}

export {PlayStore}