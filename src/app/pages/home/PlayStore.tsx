import {gql, useQuery} from "@apollo/client";
import {Variants} from "../../modules/components/framer-motion";
import React, {useEffect} from "react";
import {Card1, Card3} from "../../../_theme/partials/content/cards";
import {TablesWidget1} from "../../../_theme/partials/widgets";
import {_Chunk, _Divide} from "../../functions";

const G_APPS = gql(`
    query G_apps($filters: Filter!) {
      g_apps(filters: $filters) {
        image
      }
    }
`)

const PlayStore = () => {

    const {loading, error, data} = useQuery(G_APPS, {
        variables: {filters: {}},
    });


    if (data) {
        const {g_apps} = data

        const chunk = _Chunk(g_apps, 4)
        const divide = _Divide(g_apps, 4)

        console.log(divide)

        const components = [
            <Card1 images={["1", "2", "3", "4", "5"]}/>,
            <Card3/>,
            <Card1 images={["1", "2", "3", "4", "5"]}/>,
            <Card1 images={null}/>,
            <TablesWidget1/>,
            <Card1 images={null}/>,
        ]

        return (
            <section className="_pb-8">
                <h2 className={"text-h2 text-muted mt-3 mb-4 text-capitalize"}>play store</h2>
                <Variants childes={components} className={"grid-3"}/>
            </section>
        )
    }
    return (
        <></>
    )
}

export {PlayStore}