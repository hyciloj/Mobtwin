import React from "react";
import {KTSVG} from "../../../helpers";

const Card4 = () => {

    return (
        <div className="card card-sm">
            <div className="card-header p-0">
                <div className="img" style={{backgroundImage: "url(https://play-lh.googleusercontent.com/GO7UPgKC_7SV80k5s4f6fVHwoE_GNcVnBZ6QJHzPK_VojvPBWZUicflg6_JeyZFAfQ)"}}/>
            </div>
            <div className="card-body p-0">
                <div className="app">
                    <div className="app-name">lorem ipsum</div>

                    <div className="app-details total" style={{backgroundColor: "#219421"}}>
                        <KTSVG path='/media/icons/duotune/arrows/arr067.svg' className="details-icon"/>
                        <div className="details-label">1M installs</div>
                    </div>
                    <hr aria-orientation="horizontal" className="_separator-hr my-1"/>

                    <div className="app-details daily">
                        <KTSVG path='/media/icons/duotune/arrows/arr067.svg' className="details-icon"/>
                        <div className="details-label">1M installs</div>
                    </div>
                    <hr aria-orientation="horizontal" className="_separator-hr my-1"/>

                    <div className="app-details date">
                        <KTSVG path='/media/icons/duotune/arrows/arr067.svg' className="details-icon"/>
                        <div className="details-label">1M installs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Card4}