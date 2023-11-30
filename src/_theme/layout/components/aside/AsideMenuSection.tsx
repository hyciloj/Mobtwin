import {AsideMenuItem} from "./AsideMenuItem";
import {PATH_DASHBOARD} from "../../../../app/routing/paths";
import React, {FC} from "react";
import {AsideMenuSectionInterface} from "./types";

const AsideMenuSection: FC<AsideMenuSectionInterface> = ({
                                                             name,
                                                             item
                                                         }) => {

    return (
        <>
            <div className='menu-item'>
                <div className='menu-content pt-3 pb-2'>
                    <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{name}</span>
                </div>
            </div>

            {
                item.map((item, index) => (
                        <AsideMenuItem
                            to={item.to}
                            icon={item.icon}
                            title={item.title}
                            fontIcon={item.fontIcon}
                            key={index}
                        />
                    )
                )
            }
        </>
    )
}

export {AsideMenuSection}