import React, {FC} from "react";
import {motion} from 'framer-motion';

const Testimonial: FC = () => {

    return (
        <>
            {[0, 1, 2].map((index) => (
                <div className="testimonial" key={index}>
                    <div className="user">
                        <img
                            src={"https://assets.website-files.com/62e87007d1ea4833faeaf799/630fb9b35f7f04796429cb20_client-image-02.jpg"}
                            alt=""
                            style={{
                                borderTopRightRadius: "100%",
                                borderTopLeftRadius: "0%",
                                borderBottomRightRadius: "100%",
                                borderBottomLeftRadius: "100%",
                            }}
                        />
                        <div className="details">
                            <div className="full-name">john doe</div>
                            <div className="job">company name</div>
                        </div>
                    </div>

                    <h3 className="text-h3">"I recommend this agency"</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, ad asperiores
                        at autem cupiditate debitis dicta dolor eum itaque iusto minus nobis odit officiis quam quod
                        reiciendis repellendus repudiandae.
                    </p>
                    <div className="ratings">
                        <img
                            src="https://assets.website-files.com/62e87007d1ea4833faeaf799/63113d978ebd85eb94887924_star-rating-yellow.svg"
                            alt=""/>
                        <img
                            src="https://assets.website-files.com/62e87007d1ea4833faeaf799/63113d978ebd85eb94887924_star-rating-yellow.svg"
                            alt=""/>
                        <img
                            src="https://assets.website-files.com/62e87007d1ea4833faeaf799/63113d978ebd85eb94887924_star-rating-yellow.svg"
                            alt=""/>
                        <img
                            src="https://assets.website-files.com/62e87007d1ea4833faeaf799/63113d978ebd85eb94887924_star-rating-yellow.svg"
                            alt=""/>
                        <img
                            src="https://assets.website-files.com/62e87007d1ea4833faeaf799/63113d978ebd85eb94887924_star-rating-yellow.svg"
                            alt=""/>
                    </div>
                </div>
            ))}


        </>
    )
}

export {Testimonial}