import React, {useEffect, useRef} from "react";
import {KTSVG} from "../../../../_theme/helpers";
import {motion, useAnimation, useInView} from "framer-motion";

const array = [0, 1, 2, 3]

const Step = () => {

    const ref = useRef<HTMLDivElement | null>(null),
        isInView = useInView(ref, {once: true}),
        controls = useAnimation();

    useEffect(() => {

        if (isInView) {
            controls.start('visible');
        }
    }, [isInView])

    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const img = {
        hidden: {scale: 0},
        visible: {rotate: 180, scale: 1}
    };

    return (

        <div className="steps-container" ref={ref}>
            <motion.ul className="steps-wrapper grid-container"
                       variants={container}
                       initial={"hidden"}
                       animate={controls}
            >
                {array.map((index) => (
                    <motion.li key={index} className="step" variants={item}>
                        <motion.div
                            initial={"hidden"}
                            variants={img}
                            animate={controls}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                delay: .5
                            }}
                            className="img"
                        />
                        {/*<div className="img">*/}
                        {/*    /!*<img src={toAbsoluteUrl("media/svg/social-logos/github.svg")} alt={""} />*!/*/}
                        {/*</div>*/}
                        <div className="title text-center">
                         <span className="text-h3">
                         Set up and get organized
                     </span>
                        </div>
                        <p className="text-p">
                            Define your plan, set up workflows, add team members, mark deadlines.
                        </p>

                        {
                            index !== array.length - 1 && <div className="icon">
                                <KTSVG path={'/media/icons/duotune/arrows/arr028.svg'}/>
                            </div>
                        }
                    </motion.li>

                ))}

            </motion.ul>
        </div>
    )
}

export {Step}