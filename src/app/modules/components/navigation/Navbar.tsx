import {motion} from "framer-motion";
import React, {useRef, useState} from "react";
import {toAbsoluteUrl} from "../../../../_theme/helpers";
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../../routing/paths";
import SVG from "react-inlinesvg";
import {useClickOutside} from "../../../hooks";

const NavBar = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState<boolean>(false)

    useClickOutside(ref, () => {
        if (show) setShow(false)
    })

    const container = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    return (
        <motion.div variants={container}
                    initial="hidden"
                    animate="visible"
        >
            <div className={`navbar-fixed${show ? ' show' : ''}`} ref={ref}>
                <div className="parent">
                    <div className="brand">
                        <img src={toAbsoluteUrl('media/logos/favicon.png')} alt="Mobtwin"/>
                        <span>Mobtwin</span>
                    </div>
                    <div className="child ">
                        <div className="item"><Link to={PATH_AUTH.login}>Login</Link></div>
                        <div className="item"><Link to={PATH_AUTH.login}>Login</Link></div>
                        <div className="item"><Link to={PATH_AUTH.login}>Login</Link></div>
                        <div className="item"><Link to={PATH_AUTH.login}
                                                    className="main_button-xl px-2 p-sm-0">Login</Link></div>
                        <div className="item svg-icon" onClick={() => {

                            setShow(prevState => !prevState);
                        }}>
                            <SVG src={toAbsoluteUrl('media/icons/duotune/arrows/arr023.svg')}/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export {NavBar}