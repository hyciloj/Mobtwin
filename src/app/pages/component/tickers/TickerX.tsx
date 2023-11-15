import React, {FC} from "react";
import {motion} from "framer-motion";

type itemData = {
    id: number,
    filename: string,
}

interface InterfaceTickersX {
    data: itemData[]
    duration: number
    from: number
    to: number
}

const TickerX: FC<InterfaceTickersX> = ({data, duration, from, to}) => {

    return (
        <>
            <motion.div style={{
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden', // Hide overflowing content
            }}
            >

                <motion.div
                    className="tickers-imgs"
                    initial={{x: `${from}%`}}
                    animate={{x: `${to}%`}}
                    transition={{
                        repeat: Infinity, // Repeat animation infinitely
                        duration, // Animation duration in seconds
                        ease: 'linear', // Linear easing for a continuous effect
                    }}
                >
                    {data.map((item, index) => (
                        <div key={index}
                             style={{backgroundImage: `url(${item.filename})`,}}
                             className="tickers-img"
                        />
                    ))}
                </motion.div>

            </motion.div>
        </>
    )
}

export {TickerX}