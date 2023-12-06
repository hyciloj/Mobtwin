import React, {FC, useRef, useState} from "react";
import {KTSVG, toAbsoluteUrl} from "../../../_theme/helpers";
import {SwitchButton} from "../../modules/components/form/buttons";
import {Accordions1} from "../component";
import {motion} from "framer-motion";
import {Variants} from "../../modules/components/framer-motion";

type subscriptionProps = {
    type: string
}

export default function Plans() {

    const [subscription, setSubscription] = useState<subscriptionProps>({type: "monthly"})

    const containerNav = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }
    const containerText = {
        hidden: { opacity: 0,  y: -7, },
        visible: {
            opacity: 1,
            y: 0,
        }
    }
    const containerSubTitle = {
        hidden: { opacity: 0,  y: -4, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
            }
        }
    }
    const containerSwitch = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }
        }
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3,
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const nodeArray = [
        <div className="card">
        <div className="card-header">
            <div className="badge badge-light-gray">
                <span className="badge-label">starter</span>
            </div>
            <div className="pack-price mt-3">
                <span className="active">free</span>
            </div>
        </div>
        <div className="card-body">
            <div className="list">
                <div className="item">
                    <KTSVG path={"media/icons/duotune/arrows/arr016.svg"}
                           className="svg-success"/>
                    <div className="item-text">
                        <span>Full database of mobile apps</span>
                    </div>
                </div>
                <div className="item">
                    <KTSVG path={"media/icons/duotune/arrows/arr014.svg"} className="svg-gray"/>
                    <div className="item-text">
                        <span>Full database of mobile apps</span>
                    </div>
                </div>
            </div>
        </div>
    </div>,
        <div className="card">
            <div className="card-header">
                <div className="badge badge-light-gray">
                    <span className="badge-label">starter</span>
                </div>
                <div className="pack-price mt-3">
                                        <span
                                            className={`${subscription.type === 'monthly' ? 'active' : 'inactive'}`}>$47</span>
                    <span
                        className={`${subscription.type === 'annual' ? 'active' : ''}`}>$111</span>
                </div>
            </div>
            <div className="card-body">
                <div className="list">
                    <div className="item">
                        <KTSVG path={"media/icons/duotune/arrows/arr016.svg"}
                               className="svg-success"/>
                        <div className="item-text">
                            <span>Full database of mobile apps</span>
                        </div>
                    </div>
                    <div className="item">
                        <KTSVG path={"media/icons/duotune/arrows/arr014.svg"} className="svg-gray"/>
                        <div className="item-text">
                            <span>Full database of mobile apps</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="card">
            <div className="card-header">
                <div className="badge badge-light-gray">
                    <span className="badge-label">starter</span>
                </div>
                <div className="pack-price mt-3">
                                        <span
                                            className={`${subscription.type === 'monthly' ? 'active' : 'inactive'}`}>$47</span>
                    <span
                        className={`${subscription.type === 'annual' ? 'active' : ''}`}>$111</span>
                </div>
            </div>
            <div className="card-body">
                <div className="list">
                    <div className="item">
                        <KTSVG path={"media/icons/duotune/arrows/arr016.svg"}
                               className="svg-success"/>
                        <div className="item-text">
                            <span>Full database of mobile apps</span>
                        </div>
                    </div>
                    <div className="item">
                        <KTSVG path={"media/icons/duotune/arrows/arr014.svg"} className="svg-gray"/>
                        <div className="item-text">
                            <span>Full database of mobile apps</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
    ]

    return (
        <>
            <div className="container-fluid p-3">
                <div className="row g-5 g-xl-10">
                    <div className="col-12">
                        <div className="plans-wrapper">
                            <div className="row d-flex justify-content-center align-items-center">
                                <motion.div variants={containerNav}
                                            initial="hidden"
                                            animate="visible"
                                            className="col-12 brand"
                                >
                                    <img src={toAbsoluteUrl("media/logos/logo_white.webp")} alt={""}/>
                                    <span className="fs-2xl mx-2">Mobtwin</span>
                                </motion.div>
                                <div className="row plans-header">
                                    <div
                                        className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column">
                                        <motion.div variants={containerText}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className="title"
                                        >See our pricing</motion.div>
                                        <motion.div variants={containerSubTitle}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className="subtitle"
                                        > You have Free Unlimited Updates and Premium Support on each package.</motion.div>

                                        <motion.div variants={containerSwitch}
                                                    initial="hidden"
                                                    animate="visible"
                                                    className="subtitle">
                                            <SwitchButton buttons={['monthly', 'annual']} className={{
                                                wrapper: 'switch-button mt-5 mb-4', label: 'label'
                                            }} setState={setSubscription}/>
                                        </motion.div>
                                        <p className="subtitle">
                                            Pay annually and get 20% discount
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <Variants childes={nodeArray} className={"row plans-cards"} />

                        {/*<motion.ul*/}
                        {/*    variants={container}*/}
                        {/*    initial="hidden"*/}
                        {/*    animate="visible"*/}
                        {/*    className="row plans-cards"*/}
                        {/*    style={{listStyle: 'none'}}*/}
                        {/*>*/}
                        {/*    <motion.li variants={item} >*/}
                        {/*        <div className="card">*/}
                        {/*            <div className="card-header">*/}
                        {/*                <div className="badge badge-light-gray">*/}
                        {/*                    <span className="badge-label">starter</span>*/}
                        {/*                </div>*/}
                        {/*                <div className="pack-price mt-3">*/}
                        {/*                    <span className="active">free</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="card-body">*/}
                        {/*                <div className="list">*/}
                        {/*                    <div className="item">*/}
                        {/*                        <KTSVG path={"media/icons/duotune/arrows/arr016.svg"}*/}
                        {/*                               className="svg-success"/>*/}
                        {/*                        <div className="item-text">*/}
                        {/*                            <span>Full database of mobile apps</span>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="item">*/}
                        {/*                        <KTSVG path={"media/icons/duotune/arrows/arr014.svg"} className="svg-gray"/>*/}
                        {/*                        <div className="item-text">*/}
                        {/*                            <span>Full database of mobile apps</span>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </motion.li>*/}
                        {/*    <motion.li variants={item} >*/}
                        {/*        <div className="card">*/}
                        {/*            <div className="card-header">*/}
                        {/*                <div className="badge badge-light-gray">*/}
                        {/*                    <span className="badge-label">starter</span>*/}
                        {/*                </div>*/}
                        {/*                <div className="pack-price mt-3">*/}
                        {/*                <span*/}
                        {/*                    className={`${subscription.type === 'monthly' ? 'active' : 'inactive'}`}>$47</span>*/}
                        {/*                    <span*/}
                        {/*                        className={`${subscription.type === 'annual' ? 'active' : ''}`}>$111</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="card-body">*/}
                        {/*                <div className="list">*/}
                        {/*                    <div className="item">*/}
                        {/*                        <KTSVG path={"media/icons/duotune/arrows/arr016.svg"}*/}
                        {/*                               className="svg-success"/>*/}
                        {/*                        <div className="item-text">*/}
                        {/*                            <span>Full database of mobile apps</span>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="item">*/}
                        {/*                        <KTSVG path={"media/icons/duotune/arrows/arr014.svg"} className="svg-gray"/>*/}
                        {/*                        <div className="item-text">*/}
                        {/*                            <span>Full database of mobile apps</span>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </motion.li>*/}
                        {/*    <motion.li variants={item} >*/}
                        {/*        <div className="card">*/}
                        {/*            <div className="card-header">*/}
                        {/*                <div className="badge badge-light-gray">*/}
                        {/*                    <span className="badge-label">starter</span>*/}
                        {/*                </div>*/}
                        {/*                <div className="pack-price mt-3">*/}
                        {/*                <span*/}
                        {/*                    className={`${subscription.type === 'monthly' ? 'active' : 'inactive'}`}>$47</span>*/}
                        {/*                    <span*/}
                        {/*                        className={`${subscription.type === 'annual' ? 'active' : ''}`}>$111</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="card-body">*/}
                        {/*                <div className="list">*/}
                        {/*                    <div className="item">*/}
                        {/*                        <KTSVG path={"media/icons/duotune/arrows/arr016.svg"}*/}
                        {/*                               className="svg-success"/>*/}
                        {/*                        <div className="item-text">*/}
                        {/*                            <span>Full database of mobile apps</span>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="item">*/}
                        {/*                        <KTSVG path={"media/icons/duotune/arrows/arr014.svg"} className="svg-gray"/>*/}
                        {/*                        <div className="item-text">*/}
                        {/*                            <span>Full database of mobile apps</span>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </motion.li>*/}
                        {/*</motion.ul>*/}


                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-8">
                        <Accordions1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export {Plans}