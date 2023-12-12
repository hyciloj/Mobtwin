import {Card1, Card2, Card3, ChartsWidget1, TablesWidget1} from "../../../_theme/partials";
import React, {ReactNode, useEffect, useState} from "react";
import {Variants} from "../../modules/components/framer-motion";
import {gql, useQuery} from "@apollo/client";
import {_Shuffle} from "../../functions";
import {PlayStore} from "./PlayStore";

type RowProps = {
    title: string
    components: ReactNode[]
    className: string
}



export default function Home() {





    const rows: RowProps[] = [
        {
            title: "play store",
            components: _Shuffle([
                <Card1 images={["1", "2", "3", "4", "5"]} />,
                <Card3/>,
                <Card1 images={["1", "2", "3", "4", "5"]}/>,
                <Card1 images={null}/>,
                <TablesWidget1 />,
                <Card1 images={null}/>,
            ]),
            className: "grid-3"
        },
        {
            title: "app store",
            components: _Shuffle([
                <Card3/>,
                <Card1 images={["1", "2", "3", "4", "5"]} />,
                <Card1 images={null}/>,
                <Card1 images={["1", "2"]}/>,
                <Card1 images={null}/>,
                <TablesWidget1 />,
            ]),
            className: "grid-3"
        },
        {
            title: "steam",
            components: _Shuffle([
                <Card1 images={null}/>,
                <Card1 images={["1", "2", "3", "4", "5"]} />,
                <Card1 images={null}/>,
                <Card3/>,
            ]),
            className: "grid-1-3 grid-2-3"
        },
        {
            title: "tools",
            components: [
                <Card2 />,
            ],
            className: "grid-3"
        }
    ]



    const SectionComponent = ({type, components, className}: {type: string, className: string, components: React.ReactNode[]}) => {

        // const [{title, components}] = rows.filter((row) => row.title === type)

        if (type === "steam") {

            const [className1, className2] = className.split(" ")

            const midIndex = Math.floor(components.length / 2);
            const [firstPart, ...secondPart] = [components.slice(0, midIndex), ...components.slice(midIndex)];
            return (
                <section className="_pt-8">
                    <h2 className={"text-h2 text-muted mt-3 mb-4 text-capitalize"}>{type}</h2>
                    <Variants childes={firstPart} className={className1} />
                    <Variants childes={secondPart} className={className2} />
                </section>
            )
        }

        return (
            <section className="_pb-8">
                <h2 className={"text-h2 text-muted mt-3 mb-4 text-capitalize"}>{type}</h2>
                <Variants childes={components} className={className} />
            </section>
        )
    }

    useEffect(()=> {
        _Shuffle(rows)
    }, [])

    return (
        <>
            <PlayStore />
            {/*{*/}
            {/*    rows.map((row, index) => {*/}

            {/*        const {title, components, className} = row*/}

            {/*        return (*/}
            {/*            <SectionComponent type={title} className={className} components={components} key={index} />*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </>
    )
}