import React, {FC, useRef, useState} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from "../../../partials";
import {useClickOutside} from "../../../../app/hooks";
import {UserModel} from "../../../../app/modules/auth/models/UserModel";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../../setup";
import {IAuthState} from "../../../../app/modules/auth";

const TopBar: FC = () => {

    const [show, setShow] = useState(false)

    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref, () => {
        setShow(false)
    })

    const user: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel

    if (user) {
        return (
            <div className="d-flex align-items-center position-relative" id='kt_header_user_menu_toggle'
                 ref={ref}>
                <div className="user" onClick={() => {
                    setShow(prevState => !prevState)
                }}>
                    <div className="symbol symbol-30px">
                        <img src={user.avatar} alt='mobtwin'/>
                    </div>
                    <span className="fs-xs">{user.name}</span>
                </div>

                <HeaderUserMenu show={show} user={user}/>
            </div>

        )
    }
    return <></>
}

export {TopBar}
