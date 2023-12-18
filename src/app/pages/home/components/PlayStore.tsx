import React, {useEffect, useState} from "react";
import {Variants} from "../../../modules/components/framer-motion";
import {useQuery} from "@apollo/client";
import {Card1, Card3} from "../../../../_theme/partials/content/cards";
import {TablesWidget1} from "../../../../_theme/partials/widgets";
import {_ArrayFunctions} from "../../../functions";
import {G_App, G_App_Data, G_APPS_IMG} from "../../../requests";
import axios from "axios";

const img = "https://cdn.leonardo.ai/users/ad2bcb49-5d69-4ebb-a7c4-1bc5dac4cc31/generations/ba000dc7-e947-46b9-8d06-ad26b44b1108/variations/alchemyrefiner_alchemymagic_1_ba000dc7-e947-46b9-8d06-ad26b44b1108_0.jpg"

const PlayStore = () => {

    const [gApps, setGApps] = useState<G_App[]>([]);


    const {loading, error, data} = useQuery<G_App_Data>(G_APPS_IMG, {
        variables: {filters: {}},
    });

    useEffect(() => {

    }, [])

    if (data) {
        const {g_apps} = data

        const images: G_App[][]= _ArrayFunctions.Divide(g_apps, 4)

        const components = _ArrayFunctions.Shuffle([
            <Card1 images={["1", "2", "3", "4", "5"]} bg={img}/>,
            <Card3 images={images}/>,
            <Card1 images={["1", "2", "3", "4", "5"]} bg={img}/>,
            <Card1 images={null} bg={img}/>,
            <TablesWidget1/>,
            <Card1 images={null} bg={img}/>,
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