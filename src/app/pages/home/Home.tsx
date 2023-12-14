import React, {ReactNode, useEffect} from "react";
import {PlayStore} from "./PlayStore";
import {Section} from "./Section";
import {AppStore} from "./AppStore";
import {Card1, Card2, Card3, ChartsWidget1, TablesWidget1} from "../../../_theme/partials";
import {_Shuffle} from "../../functions";
import {Variants} from "../../modules/components/framer-motion";
import Logout from "../../modules/auth/components/Logout";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../setup";

type RowProps = {
    title: string
    components: ReactNode[]
    className: string
}


interface RowsInterface {
    name: "playStore" | "appStore"
    component: ReactNode
}

export default function Home() {

    const accessToken = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)


    const _rows: RowsInterface[] = [
        {name: "appStore", component: <AppStore />},
        {name: "playStore", component: <PlayStore />},
    ]

    const rows: RowProps[] = [
        {
            title: "steam",
            components: _Shuffle([
                <Card1 images={null}/>,
                <Card1 images={["1", "2", "3", "4", "5"]} />,
                <Card1 images={null}/>,
                // <Card3/>,
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
                    <Variants childes={firstPart} className={className1}/>
                    <Variants childes={secondPart} className={className2}/>
                </section>
            )
        }
    }

    useEffect(() => {
        if (accessToken) {
            // console.log(jwtDecode(accessToken + ""))
        }

    })

        return (
        <>
            <Logout />
            {
                _rows.map((row, index) => {

                    return (
                        <Section row={row} key={index} />
                    )
                })
            }

            <section className="_pt-8">
                <h2 className={"text-h2 text-muted mt-3 mb-4 text-capitalize"}>steam</h2>
                <Variants childes={[
                    <Card1 images={null}/>,
                    <Card1 images={["1", "2", "3", "4", "5"]} />,
                ]
                } className={"grid-1-3"}/>
                <Variants childes={[
                    <Card1 images={null}/>,
                    <Card1 images={["1", "2", "3", "4", "5"]} />,
                ]} className={"grid-2-3"}/>
            </section>
        </>
    )
}