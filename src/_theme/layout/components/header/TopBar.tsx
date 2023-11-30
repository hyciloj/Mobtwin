import React, {FC, useRef, useState} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from "../../../partials";
import {useClickOutside} from "../../../../app/hooks";
import {UserModel} from "../../../../app/modules/auth/models/UserModel";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../../setup";

const TopBar: FC = () => {

    const [show, setShow] = useState(false)

    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref, () => {
        setShow(false)
    })

    const {user}: UserModel = useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel

    const {name, avatar} = user

    return (
        <div className="d-flex align-items-center position-relative" id='kt_header_user_menu_toggle' ref={ref}>
            <div className="symbol" onClick={() => {
                setShow(prevState => !prevState)
            }}>
                <img src={avatar} alt='mobtwin'/>
            </div>
            <HeaderUserMenu show={show} user={user}/>
        </div>

    )
}

export {TopBar}
