import React, {FC} from "react";
import {KTSVG} from "../../../../_theme/helpers";

interface NotificationInterface {
    svg: string,
    title: string,
    message: string,
}

const Notification: FC<NotificationInterface> = ({svg, title, message}) => {

    return (
        <div className="notification">
            <KTSVG
                path={svg}
                className='notification-icon'
            />
            <div className="notification-text">
                <p className="notification-title">{title}</p>
                <p className="notification-message">{message}</p>
            </div>
        </div>
    )
}
export {Notification}