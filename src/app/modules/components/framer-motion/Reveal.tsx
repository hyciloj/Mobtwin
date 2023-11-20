import React, {FC, ReactNode, useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
type PropsAxes = {
    x: number,
    y: number,

}
type Props = {
    children: ReactNode
    from: PropsAxes,
    to: PropsAxes
}

const Reveal: FC<Props> = ({children, from, to}) => {

    const ref = useRef<HTMLDivElement | null>(null),
        isInView = useInView(ref, {once: true}),
        controls = useAnimation();

    useEffect(() => {

        if (isInView) {
            controls.start('visible');
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div variants={{
                hidden: {opacity: 0, y: from.y, x: from.x},
                visible: {opacity: 1, y: to.y, x: to.x},
            }}
                        initial={"hidden"}
                        animate={controls}
                        transition={{duration: .5, delay: .25}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export {Reveal}