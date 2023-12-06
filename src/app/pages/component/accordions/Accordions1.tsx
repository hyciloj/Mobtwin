import React, {FC, useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../../_theme/helpers";
import {Reveal} from "../../../modules/components/framer-motion";

const col1 = [
    {
        id: 1,
        question: 'Can I collaborate outside my organization?',
        answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
    },
    {
        id: 2,
        question: 'Is there a user limit on your basic plan?',
        answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
    },
    {
        id: 3,
        question: 'How secure is Projectile?',
        answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
    }
]

const Accordions1 = () => {

    const [selected, setSelected] = useState<number>(-1);
    const toggle = (i: number) => {

        if (selected === i) {
            return setSelected(-1);
        }

        setSelected(i);
    }


    return (
        <div className="accordion-container">
            <div className="accordion-wrapper column-1">
                <div className="accordion-col">
                    {
                        col1.map((item, index) => (
                            <Accordion key={index} toggle={toggle} item={item} selected={selected} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export {Accordions1}

type AccordionProps = {
    selected: number;
    item: {
        id: number;
        question: string;
        answer: string;
    };
    toggle: (i: number) => void
}
const Accordion: FC<AccordionProps> = ({
                                           selected,
                                           item,
                                           toggle
                                       }) => {

    return (
        <Reveal from={{x: 0, y: 75}} to={{x: 0, y: 0}}>
            <div className={`accordion-item${selected === item.id ? ' active' : ''}`}>
                <div className="header" onClick={() => {
                    toggle(item.id)
                }}>
                    <div className="title text-white">{item.question}</div>
                    <div className="svg-icon">
                        <SVG src={toAbsoluteUrl('media/icons/duotune/arrows/arr023.svg')}/>
                    </div>
                </div>
                <div className="content">
                    <div className="description text-white">
                        {item.answer}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}