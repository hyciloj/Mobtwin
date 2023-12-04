import React, {FC} from 'react'
import {ChildrenProps} from "../../config-global";
import {PageDataProvider} from "./core";
import {AsideDefault} from './components/aside/AsideDefault'
import {HeaderWrapper} from "./components/header/HeaderWrapper";
import {Toolbar} from "./components/toolbar";
import {Content} from "./components/Content";


const MasterLayout: FC<ChildrenProps> = ({children}) => {

    const number = 1234512345;
    const digits = String(number)
        .split('')

    return (
        <PageDataProvider>

            <div className='page d-flex flex-row flex-column-fluid'>
                <AsideDefault />
                <div className='wrapper d-flex flex-column flex-row-fluid position-relative' id='kt_wrapper'>
                    <HeaderWrapper />

                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>

                        {/*<Toolbar />*/}

                        {/*<div className="row my-3">*/}
                        {/*    <div className="col-12 d-flex justify-content-center align-items-center">*/}
                        {/*        {*/}
                        {/*            digits.map((item, index) => (*/}
                        {/*                <button className="button" key={index}>*/}
                        {/*                    hello world!*/}
                        {/*                </button>*/}
                        {/*            ))*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='post d-flex flex-column-fluid' id='kt_post'>
                            <Content>{children}</Content>
                        </div>
                    </div>

                </div>
            </div>

            {/*<div className='d-flex flex-row flex-column-fluid'>*/}
            {/*    <AsideDefault/>*/}
            {/*    <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>*/}

            {/*        <HeaderWrapper />*/}


            {/*        <div className='container-fluid wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>*/}
            {/*            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>*/}
            {/*                {children}*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}


            {/*</div>*/}

        </PageDataProvider>
    )
}

export {MasterLayout}
