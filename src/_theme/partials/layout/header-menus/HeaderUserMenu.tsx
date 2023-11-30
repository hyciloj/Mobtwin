import React, {FC} from "react";
import {UserModel} from "../../../../app/modules/auth/models/UserModel";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../../setup";
import {toAbsoluteUrl} from "../../../helpers";
import {Link} from "react-router-dom";
import {PATH_AUTH, PATH_DASHBOARD} from "../../../../app/routing/paths";
import {UserInterface} from "../../../../app/modules/auth/models/AuthModel";

type HeaderUserMenuProps = {
    show: boolean
    user: UserInterface
}

const HeaderUserMenu: FC<HeaderUserMenuProps> = ({show, user}) => {

    const {name, avatar} = user


    return (
        <div className={`menu menu-sub menu-sub-dropdown${show ? ' show' : ''}`} data-kt-menu='true'>
            <div className="menu-item">
                <div className="menu-content d-flex align-items-center">
                    <div className="symbol">
                        <img alt="Logo" src={avatar}/>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="full-name">{name}</div>
                        {/*<div className="email">{email}</div>*/}
                    </div>
                </div>
            </div>
            <div className="separator my-2"/>
            <div className="menu-item">
                <Link to={PATH_DASHBOARD.user.profile} className="menu-link">profile</Link>
            </div>
            <div className="menu-item">
                <Link to={PATH_DASHBOARD.user.profile} className="menu-link">profile</Link>
            </div>
            <div className="menu-item">
                <Link to={PATH_DASHBOARD.user.profile} className="menu-link">profile</Link>
            </div>
            <div className="menu-item">
                <Link to={PATH_DASHBOARD.user.profile} className="menu-link">profile</Link>
            </div>
        </div>
    )
}

export {HeaderUserMenu}