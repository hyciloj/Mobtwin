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
            <div className="d-flex flex-row overflow-hidden">
                <div className="tickers-imgs" style={{animationDuration: `${duration}s`}}>
                    {
                        renderTickerItems()
                        // icon.map((item, itemIndex: number) => (
                        //     <div key={itemIndex} style={{ backgroundImage: `url(${item.icon})` }}
                        //          className="tickers-img"
                        //     />
                        // ))
                    }
                </div>
            </div>

            {/*<motion.div style={{*/}
            {/*    display: 'flex',*/}
            {/*    flexDirection: 'row',*/}
            {/*    overflow: 'hidden',*/}
            {/*}}*/}
            {/*>*/}

            {/*    <motion.div*/}
            {/*        className="tickers-imgs"*/}
            {/*        initial={{x: `${from}%`}}*/}
            {/*        animate={{x: `${to}%`}}*/}
            {/*        transition={{*/}
            {/*            repeat: Infinity, // Repeat animation infinitely*/}
            {/*            duration, // Animation duration in seconds*/}
            {/*            ease: 'linear', // Linear easing for a continuous effect*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {renderTickerItems()}*/}
            {/*    </motion.div>*/}

            {/*</motion.div>*/}
        </>
    )
});

export {TickerX}