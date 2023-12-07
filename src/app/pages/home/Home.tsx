import {Card1, Card2, Card3, Card4, TablesWidget1} from "../../../_theme/partials";
import React from "react";
import {Variants} from "../../modules/components/framer-motion";

export default function Home() {

    const nodeArrayRow4 = [
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
        <Card4 />,
    ]

    const nodeArrayRow1 = [
        <TablesWidget1 />,
        <TablesWidget1 />,
        <TablesWidget1 />,
    ]

    const nodeArrayRow2 = [
        <Card2 />,
        <Card1 />,
        <Card3 />,
    ]

    const nodeArrayRow3 = [
        <Card2 />,
        <Card1 />,
    ]
    return (
        <>
            <Variants childes={nodeArrayRow1} className={"grid-3"} />
            <Variants childes={nodeArrayRow2} className={"grid-3"} delayChildren={.9} />
            <Variants childes={nodeArrayRow3} className={"grid-1-3"} />
            <Variants childes={nodeArrayRow4} className={"grid-8"} />
        </>
    )
}