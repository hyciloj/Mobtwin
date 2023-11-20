import React, {useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../../_theme/helpers";
import {Reveal} from "../../../modules/components/framer-motion";

const data = [
    {
        question: 'What are accordion components?',
        answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
    },
    {
        question: 'What are they used for?',
        answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
    },
    {
        question: 'Accordion as a musical instrument',
        answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
    },
    {
        question: 'Can I create an accordion component with a different framework?',
        answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
    }
];

const Accordion = () => {

    const [selected, setSelected] = useState<null | number>(null);
    const toggle = (i: number) => {

        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }


    return (
        <div className="accordion-container">
            <div className="accordion-wrapper">

                {
                    data.map((item, index) => (
                        <Reveal from={{x: 0, y: 75}} to={{x: 0, y: 0}}>
                            <div className={`accordion-item${selected === index ? ' active' : ''}`} key={index}>
                                <div className="header" onClick={() => {
                                    toggle(index)
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
                    ) )
                }

            </div>
        </div>
    )
}

export {Accordion}