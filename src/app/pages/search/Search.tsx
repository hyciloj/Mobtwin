import React, {FC} from "react";
import {Link} from "react-router-dom";
import {PATH_DASHBOARD} from "../../routing/paths";
import {useDispatch} from "react-redux";
import * as auth from "../../../app/modules/auth/redux/AuthRedux";
import {logout} from "../../modules/auth/redux/AuthCRUD";
import Logout from "../../modules/auth/components/Logout";

export default function Search() {

    return (
        <>
            <Logout />
            <div className={"_pt-10"}>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugit molestias mollitia odio pariatur sunt ullam? Alias deleniti deserunt dolor enim esse,
                excepturi magnam molestias neque nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugit molestias mollitia odio pariatur sunt ullam? Alias deleniti deserunt dolor enim esse,
                excepturi magnam molestias neque nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugit molestias mollitia odio pariatur sunt ullam? Alias deleniti deserunt dolor enim esse,
                excepturi magnam molestias neque nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugit molestias mollitia odio pariatur sunt ullam? Alias deleniti deserunt dolor enim esse,
                excepturi magnam molestias neque nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugit molestias mollitia odio pariatur sunt ullam? Alias deleniti deserunt dolor enim esse,
                excepturi magnam molestias neque nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur fugit molestias mollitia odio pariatur sunt ullam? Alias deleniti deserunt dolor enim esse,
                excepturi magnam molestias neque nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit molestias mollitia odio
                    pariatur sunt ullam? Alias deleniti deserunt dolor enim esse, excepturi magnam molestias neque
                    nesciunt nulla repudiandae sint!</p>


            </div>
        </>
    )
}
