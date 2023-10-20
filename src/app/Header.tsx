import {FC, useState} from 'react'
import '../_theme/assets/sass/style.scss';
import {useLayout, getLayout, LayoutSetup, ILayout} from "../_theme/layout/core";

const Header: FC = () => {

    const {setLayout} = useLayout()
    const [configLoading, setConfigLoading] = useState<boolean>(false)
    const [config, setConfig] = useState<ILayout>(getLayout())

    const updateData = (fieldsToUpdate: Partial<ILayout>) => {
        const updatedData = {...config, ...fieldsToUpdate}

        setConfig(updatedData)
        LayoutSetup.setConfig(updatedData)
    }




    return (
        <header className="header">
            <div className="header-content">
                <a href="/" className="logo-section">
                    {/*<img src={logoIcon} alt="logo"/>*/}
                    <span className={'text'}>Light/Dark mode app</span>
                </a>
                <div className="toggle-btn-section">
                    <div className={`toggle-checkbox m-vertical-auto`}>
                        {/*<input*/}
                        {/*    className="toggle-btn__input"*/}
                        {/*    type="checkbox"*/}
                        {/*    name="checkbox"*/}
                        {/*    onChange={handleThemeChange}*/}
                        {/*    checked={theme === 'light'}*/}
                        {/*/>*/}
                        <button type="button" className={`toggle-btn__input-label`}
                                onClick={() =>
                                    updateData({
                                        mode: 'light'
                                    })
                                }
                        >
                            Mode
                        </button>

                        <div className={'div-100'}>100</div>
                        <div className={'div-300'}>300</div>
                        <div className={'div-400'}>400</div>
                        <div className={'div-500'}>500</div>
                    </div>
                </div>

                <h1 style={{padding: 5}}>{config.mode}</h1>
            </div>
        </header>
    );
};
export default Header;
