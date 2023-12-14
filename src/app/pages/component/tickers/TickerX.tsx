import React, { FC, memo, useCallback } from "react";
import { motion } from "framer-motion";

type itemData = {
    icon: string;
};

interface InterfaceTickersX {
    data: itemData[];
    duration: number;
    from: number;
    to: number;
}
const TickerX: FC<InterfaceTickersX> = memo(({ data, duration, from, to }) => {

    const renderTickerItems = useCallback(() => {
        return data.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.icon})` }} className="tickers-img" />
        ));
    }, [data]);



    return (
        <>
            <motion.div style={{
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
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
                    {renderTickerItems()}
                </motion.div>

            </motion.div>
        </>
    )
});

export {TickerX}