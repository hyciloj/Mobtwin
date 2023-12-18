import {gql, useApolloClient, useQuery} from "@apollo/client";
import {Variants} from "../../../modules/components/framer-motion";
import React, {useEffect, useState} from "react";
import {Card1, Card3} from "../../../../_theme/partials/content/cards";
import {TablesWidget1} from "../../../../_theme/partials/widgets";
import {_ArrayFunctions} from "../../../functions";
import {IOS_App, IOS_App_Data, IOS_APPS_IMG, useAppsQuery} from "../../../requests";
import client from "../../../../setup/apollo/apollo";

const img = "https://cdn.leonardo.ai/users/ad2bcb49-5d69-4ebb-a7c4-1bc5dac4cc31/generations/ba000dc7-e947-46b9-8d06-ad26b44b1108/variations/alchemyrefiner_alchemymagic_1_ba000dc7-e947-46b9-8d06-ad26b44b1108_0.jpg"

const AppStore = () => {


    const {loading, error, data} = useQuery<IOS_App_Data>(IOS_APPS_IMG, {
        variables: {filters: {}},
    });


    if (data) {
        const {ios_apps} = data

        const images: IOS_App[][] = _ArrayFunctions.Divide(ios_apps, 4)

        const components = _ArrayFunctions.Shuffle([
            <Card3 images={images}/>,
            <Card1 images={["1", "2", "3", "4", "5"]}  bg={img}/>,
            <Card1 images={null} bg={img}/>,
            <Card1 images={["1", "2"]} bg={img}/>,
            <Card1 images={null} bg={img}/>,
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