import {Variants} from "../../../modules/components/framer-motion";
import {Card1} from "../../../../_theme/partials/content/cards";
import React from "react";
import {useQuery} from "@apollo/client";
import {Steam_Games, Steam_Games_Data, STEAM_IMG} from "../../../requests";
import {_ArrayFunctions} from "../../../functions";

const img = "https://cdn.leonardo.ai/users/ad2bcb49-5d69-4ebb-a7c4-1bc5dac4cc31/generations/ba000dc7-e947-46b9-8d06-ad26b44b1108/variations/alchemyrefiner_alchemymagic_1_ba000dc7-e947-46b9-8d06-ad26b44b1108_0.jpg"

const SteamGames = () => {

    const {loading, error, data} = useQuery<Steam_Games_Data>(STEAM_IMG, {
        variables: {filters: {}},
    });

    if (loading || error) {
        return (
            <>
                <Variants childes={[
                    <Card1 images={null} bg={img} name={null} summary={null}/>,
                    <Card1 images={["1", "2", "3", "4", "5"]} bg={img} name={null} summary={null}/>,
                ]} className={"grid-1-3"}/>
                <Variants childes={[
                    <Card1 images={null} bg={img} name={null} summary={null}/>,
                    <Card1 images={["1", "2", "3", "4", "5"]} bg={img} name={null} summary={null}/>,
                ]} className={"grid-2-3"}/>
            </>
        );
    }

    if (!data) {
        return null;
    }

    const [first, second, third, fourth]: Steam_Games[] = _ArrayFunctions.PreciseSize(data.steam_games, 4);

    return (
        <>
            <Variants childes={[
                <Card1 images={_ArrayFunctions.PreciseSize(first.screenshots, 5)}
                       bg={first.header_image}
                       name={first.name}
                       summary={first.summary}
                />,
                <Card1 images={null}
                       bg={second.header_image}
                       name={second.name}
                       summary={second.summary}
                />,
            ]} className={"grid-1-3"}/>
            <Variants childes={[
                <Card1 images={null}
                       bg={third.header_image}
                       name={third.name}
                       summary={third.summary}
                />,
                <Card1 images={_ArrayFunctions.PreciseSize(fourth.screenshots, 5)}
                       bg={fourth.header_image}
                       name={fourth.name}
                       summary={fourth.summary}
                />,
            ]} className={"grid-2-3"}/>
        </>
    );

}

export {SteamGames}