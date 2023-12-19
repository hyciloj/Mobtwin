import React, {useEffect, useState} from "react";
import {Variants} from "../../../modules/components/framer-motion";
import {useQuery} from "@apollo/client";
import {Card1, Card3} from "../../../../_theme/partials/content/cards";
import {TablesWidget1} from "../../../../_theme/partials/widgets";
import {_ArrayFunctions} from "../../../functions";
import {G_App, G_App_Data, G_APPS_IMG} from "../../../requests";
import axios from "axios";

const img = "https://cdn.leonardo.ai/users/ad2bcb49-5d69-4ebb-a7c4-1bc5dac4cc31/generations/ba000dc7-e947-46b9-8d06-ad26b44b1108/variations/alchemyrefiner_alchemymagic_1_ba000dc7-e947-46b9-8d06-ad26b44b1108_0.jpg"

const imgs = [
    "https://cdn.leonardo.ai/users/6f426457-8148-4732-9ec1-304648b4bb48/generations/548a470c-24e2-4fbb-836d-d5768ea3c577/variations/Default_high_quality_32k_UHD_Ultra_Modern_Acrylic_painting_sur_7_548a470c-24e2-4fbb-836d-d5768ea3c577_1.jpg?w=512",
    "https://cdn.leonardo.ai/users/defe98f3-11b7-463b-a487-cd1f3c074280/generations/fea90412-4dca-41c0-889a-b659e827c905/variations/alchemyrefiner_alchemymagic_0_fea90412-4dca-41c0-889a-b659e827c905_0.jpg?w=512",
    "https://cdn.leonardo.ai/users/34422b0b-b5db-4b20-af0b-7d23ed3041d7/generations/3c63fa95-aee3-4c73-89d4-4e8d9897d624/variations/alchemyrefiner_alchemymagic_1_3c63fa95-aee3-4c73-89d4-4e8d9897d624_0.jpg?w=512",
    "https://cdn.leonardo.ai/users/02c0edc8-1de5-4190-a3a3-270569b7f4b5/generations/b2cf1dd0-acf6-4f77-b0f2-6d7debb9ff97/variations/alchemyrefiner_alchemymagic_0_b2cf1dd0-acf6-4f77-b0f2-6d7debb9ff97_0.jpg?w=512",
    "https://cdn.leonardo.ai/users/399dd04b-c67c-48f1-a33d-9a521a218547/generations/a73c03d0-613a-4e1d-8d29-18656a55b768/variations/alchemyrefiner_alchemymagic_5_a73c03d0-613a-4e1d-8d29-18656a55b768_0.jpg?w=512",
]
const PlayStore = () => {

    const [gApps, setGApps] = useState<G_App[]>([]);


    const {loading, error, data} = useQuery<G_App_Data>(G_APPS_IMG, {
        variables: {filters: {}},
    });

    if (data) {
        const {g_apps} = data

        const images: G_App[][]= _ArrayFunctions.Divide(g_apps, 4)

        const components = _ArrayFunctions.Shuffle([
            <Card1 images={imgs} bg={img} name={null} summary={null}/>,
            <Card3 images={images}/>,
            <Card1 images={imgs} bg={img} name={null} summary={null}/>,
            <Card1 images={null} bg={img} name={null} summary={null}/>,
            <TablesWidget1/>,
            <Card1 images={null} bg={img} name={null} summary={null}/>,
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