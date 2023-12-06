import React, {FC, ReactNode, useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

type PropsAxes = {
    x: number,
    y: number,

}
type Props = {
    children: ReactNode
}

interface InterfaceVariants {
    childes: ReactNode[]
    className: string
    delayChildren?: number,
}

const Variants: FC<InterfaceVariants> = ({childes, className, delayChildren = .3}) => {

    const ref = useRef<HTMLDivElement | null>(null),
        isInView = useInView(ref, {once: true}),
        controls = useAnimation();

    const container = {
        hidden: {opacity: 1, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren,
                staggerChildren: 0.2,
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

    useEffect(() => {

        if (isInView) {
            controls.start('visible');
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.ul variants={container}
                       initial="hidden"
                       animate={controls}
                       className={className}
                       style={{listStyle: 'none'}}
            >
                {
                    childes.map((itemNode, index) => (
                        <motion.li key={index} className="item" variants={item}>
                            {itemNode}
                        </motion.li>
                    ))
                }
            </motion.ul>
        </div>
    )
}

export {Variants}