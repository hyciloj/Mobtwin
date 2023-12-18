import React, {FC, useRef, useState} from 'react'
import {useClickOutside} from "../../../../app/hooks";
import {useAuthContext} from "../../../../app/auth/useAuthContext";
import {HeaderUserMenu} from "../../../partials/layout/header-menus";

const TopBar: FC = () => {

    const [show, setShow] = useState(false)

    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref, () => {
        setShow(false)
    })

    const {user} = useAuthContext()

    if (user) {
        const {name, avatar} = user
        return (
            <div className="d-flex align-items-center position-relative" id='kt_header_user_menu_toggle'
                 ref={ref}>
                <div className="user" onClick={() => {
                    setShow(prevState => !prevState)
                }}>
                    <div className="symbol symbol-30px">
                        <img src={avatar} alt='mobtwin'/>
                    </div>
                    <span className="fs-xs">{name}</span>
                </div>

                <HeaderUserMenu show={show} user={user}/>
            </div>
        )
    }

    return <></>


}

export {TopBar}
