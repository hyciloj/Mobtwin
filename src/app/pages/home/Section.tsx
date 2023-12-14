import React, {FC, ReactNode} from "react";
import {Variants} from "../../modules/components/framer-motion";

interface AttributesInterface {
    name: string,
    component: ReactNode
}
interface SectionInterface {
    row: AttributesInterface
}

const Section: FC<SectionInterface> = ({row}) => {

    const {name, component} = row

    return (
        <section className="_pb-8">
            <h2 className={"text-h2 text-muted mt-3 mb-4 text-capitalize"}>{name}</h2>
            {component}
        </section>
    )
}

export {Section}