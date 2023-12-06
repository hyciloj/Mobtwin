import React, {FC, useState, useMemo, useCallback, useEffect, Dispatch, SetStateAction} from "react";
import {ILayout} from "../../../../../_theme/layout/core";

type GroupButtonProps = {
    buttons: string[];
    className: {
        wrapper: string;
        label: string;
        icon?: string;
    };
    setState: Dispatch<SetStateAction<setStateProps>>
};

type setStateProps = {
    type: string
}

const SwitchButton: FC<GroupButtonProps> = ({ buttons, className , setState}) => {
    const [active, setActive] = useState(0);
    const { innerWidth } = window;

    const initialProperties = useMemo(() => {
        return {
            left: innerWidth > 576 ? 1.5 : 2,
            top: innerWidth > 576 ? 7.5 : 5,
            width: innerWidth > 576 ? 50 - 2 : 100 - 4,
            height: innerWidth > 576 ? 100 - 15 : 100 - 60,
        };
    }, [innerWidth]);

    const [properties, setProperties] = useState(initialProperties);

    const { left, top, width, height } = properties;
    const { wrapper, label } = className;

    const length = buttons.length;

    const onClick = useCallback(
        (index: number, state: string) => {
            const gliderPosition = (index / length) * 100;
            setActive(index);
            setState({type: state});

            if (innerWidth > 576) {
                setProperties({ ...properties, left: gliderPosition + 1 });
            } else {
                setProperties({ ...properties, top: gliderPosition + 5 });
            }
        },
        [length, innerWidth, properties]
    );

    const buttonsWithMemo = useMemo(
        () =>
            buttons.map((item, index) => (
                <div
                    className={`${label} ${active === index ? "active" : ""}`}
                    key={index}
                    onClick={() => onClick(index, item)}
                >
                    {item}
                </div>
            )),
        [buttons, active, label, onClick]
    );

    return (
        <div className={wrapper}>
            {buttonsWithMemo}
            <div
                className="glider"
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${width}%`,
                    height: `${height}%`,
                }}
            />
        </div>
    );
};

export { SwitchButton };
