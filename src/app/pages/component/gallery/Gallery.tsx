import React, {FC, memo} from "react";
import {Reveal} from "../../../modules/components/framer-motion";

type ColumnItem = {
    id: number;
    filename: string;
};

interface GalleryProps {
    firstColumn: ColumnItem[];
    secondColumn: ColumnItem[];
    thirdColumn: ColumnItem[];
    fourthColumn: ColumnItem[];
}

const ColumnItemComponent: React.FC<ColumnItem> = ({filename}) => (
    <Reveal from={{x: 0, y: 75}} to={{x: 0, y: 0}}>
        <div className="gallery-img">
            <img src={filename} alt=""/>
        </div>
    </Reveal>
);


const ColumnComponent: React.FC<{ items: ColumnItem[] }> = ({items}) => (
    <div className="gallery-column">
        {items.map((item, index) => (
            <ColumnItemComponent key={index} {...item} />
        ))}
    </div>
);


const Gallery: FC<GalleryProps> = memo(({firstColumn, secondColumn, thirdColumn, fourthColumn}) => (
    <>

        <ColumnComponent items={firstColumn}/>
        <ColumnComponent items={secondColumn}/>
        <ColumnComponent items={thirdColumn}/>
        <ColumnComponent items={fourthColumn}/>
    </>
));

export {Gallery};
