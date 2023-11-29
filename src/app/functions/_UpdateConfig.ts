import {LayoutContextModel} from "../../_theme/layout/core/provider";
import {ILayout} from "../../_theme/layout/core";

type UpdateDataProps = {
    config: LayoutContextModel
    fieldsToUpdate: Partial<ILayout>
}

export const _UpdateConfig = ({config, fieldsToUpdate}: UpdateDataProps) => {

    const {layout, setLayout} = config
    const updatedData = {...layout, ...fieldsToUpdate}

    setLayout(updatedData)
}