import React from "react";

const CardImage = () => {

    return (
        <>
            <div className="card-img" style={{backgroundImage: "url(https://mobtwin.com/beta/assets/images/stream_preview.jpeg)"}}>
                <div className="card-img-body">
                    <div className="title">
                        <span>New Video</span>
                    </div>
                    <div className="subtitle">
                        <span>check reskin updates</span>
                    </div>
                    <div className="details">
                        <div className="details-img">
                            <img src={"https://mobtwin.com/beta/assets/images/streamer_preview.jpeg"} alt=""/>
                        </div>
                        <div className="details-full-name">
                            full name
                        </div>
                        <div className="details-btn">
                            watch
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {CardImage}