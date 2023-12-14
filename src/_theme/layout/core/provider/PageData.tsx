import React, {FC, useContext, useEffect, useState} from "react";
import {ChildrenProps} from "../../../../config-global";
import {PageDataContext, PageDataContextModel, PageLink} from "../context";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../../../setup";
import {AuthModel} from "../../../../app/modules/auth/models/AuthModel";
import {IAuthState} from "../../../../app/modules/auth";

const PageDataProvider: FC<ChildrenProps> = ({children}) => {

    const [pageTitle, setPageTitle] = useState<string>('')
    const [pageDescription, setPageDescription] = useState<string>()
    const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>()

    const {accessToken} = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual) as IAuthState


    const value: PageDataContextModel = {
        pageTitle,
        setPageTitle,
        pageDescription,
        setPageDescription,
        pageBreadcrumbs,
        setPageBreadcrumbs,
    }

    return (
        <PageDataContext.Provider value={value}>
            {children}
        </PageDataContext.Provider>
    )
}


function usePageData() {
    return useContext(PageDataContext)
}

interface Props  extends ChildrenProps{
    description?: string
    breadcrumbs?: Array<PageLink>
}
const PageTitle: FC<Props> = ({children, description, breadcrumbs}) => {

    const {setPageTitle, setPageDescription, setPageBreadcrumbs} = usePageData()

    useEffect(() => {
        if (children) setPageTitle(children.toString())
        return setPageTitle('')
    }, [children])

    useEffect(() => {
        if (description) setPageDescription(description)
        return setPageDescription('')
    }, [description])

    useEffect(() => {
        if (breadcrumbs) setPageBreadcrumbs(breadcrumbs)
        return setPageBreadcrumbs([])
    }, [breadcrumbs])

    return (
        <>

        </>
    )
}

const PageDescription: FC<ChildrenProps> = ({children}) => {
    const {setPageDescription} = usePageData()
    useEffect(() => {
        if (children) {
            setPageDescription(children.toString())
        }
        return () => {
            setPageDescription('')
        }
    }, [children])
    return <></>
}

export {PageDescription, PageTitle, PageDataProvider, usePageData}
