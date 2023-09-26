import {createContext, FC} from 'react';
import {ILayout} from "../LayoutModels";
import {DefaultLayoutConfig} from "../DefaultLayoutConfig";
import {LayoutSetup} from "../LayoutSetup";

export interface LayoutContextModel {
    config: ILayout
    setLayout: (config: LayoutSetup) => void
}

export const LayoutContext = createContext<LayoutContextModel>({
    config: DefaultLayoutConfig,
    setLayout: (config) => {},
});