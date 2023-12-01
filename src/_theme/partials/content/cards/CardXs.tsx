import React from "react";

const object = {
    img: "https://cdn.leonardo.ai/users/3bf04a54-885e-4078-8106-68466c680d8a/generations/1288a93d-7eca-460d-855b-e24a3968b88a/variations/Default_MascoteEnvision_a_palmsized_robotic_sparrow_mascot_des_0_1288a93d-7eca-460d-855b-e24a3968b88a_1.jpg?w=512"

}
const CardXs = () => {

    //
    return (
        <div className='card-xs'>
            <img src={object.img} alt={'mobtwin'} />
            <span>result</span>
        </div>
    )
}

export {CardXs}
