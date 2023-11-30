import React, {FC, useState, useMemo} from "react";

type GroupButtonProps = {
    buttons: string[];
};
const GroupButton: FC<GroupButtonProps> = ({buttons}) => {

    const [active, setActive] = useState(0);

    const length = buttons.length;
    const gliderWidth = (1 / length) * 100;
    const gliderLeft = (active / length) * 100;

    const buttonsWithMemo = useMemo(() => {
        return buttons.map((item, index) => (
            <button key={index}
                    onClick={() => {
                        setActive(index);
                    }}
                    className={active === index ? "active" : ""}
            >
                <span>{item}</span>
            </button>
        ));
    }, [buttons, active]);

    return (
        <div className="group-button ">
            {buttonsWithMemo}
            <div className="glider" style={{left: `${gliderLeft}%`, width: `${gliderWidth}%`}}/>
        </div>
    );
};

export {GroupButton};
