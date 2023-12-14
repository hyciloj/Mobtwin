import {gql, useQuery} from "@apollo/client";
import {Variants} from "../../modules/components/framer-motion";
import React, {useEffect, useState} from "react";
import {Card1, Card3} from "../../../_theme/partials/content/cards";
import {TablesWidget1} from "../../../_theme/partials/widgets";
import {_Chunk, _Divide, _Shuffle} from "../../functions";
import {Filter, G_App_Data, G_APPS_IMG, IOS_App_Data, IOS_APPS_IMG} from "../../requests";


const AppStore = () => {

    const {loading, error, data} = useQuery<IOS_App_Data>(IOS_APPS_IMG, {
        variables: {filters: {}},
    });

    if (data) {
        const {ios_apps} = data


        const images = _Divide(ios_apps, 4)

        const components = _Shuffle([
            <Card3 images={images}/>,
            <Card1 images={["1", "2", "3", "4", "5"]} />,
            <Card1 images={null}/>,
            <Card1 images={["1", "2"]}/>,
            <Card1 images={null}/>,
            <TablesWidget1 />,
        ])

        return (
            <Variants childes={components} className={"grid-3"}/>
        )
    }
    return (
        <></>
    )
}

export {AppStore}