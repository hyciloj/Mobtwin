import React, {FC, useRef, useEffect, useState} from 'react'
import {shallowEqual, useSelector, connect, useDispatch, ConnectedProps} from 'react-redux'
import * as auth from './AuthRedux'
import {getUserByToken} from './AuthCRUD'
import {RootState} from '../../../../setup'
import {LoadingPrimary} from "../../components/loading/LoadingPrimary";
import {useLocation} from "react-router-dom";
import {isValidToken, jwtDecode, setSession} from "../../../../_theme/helpers";
import {IAuthState} from "./AuthRedux";

const mapState = (state: RootState) => ({auth: state.auth})
const connector = connect(mapState, auth.actions)
type PropsFromRedux = ConnectedProps<typeof connector> & {
    children: React.ReactNode;
};
const AuthInit: FC<PropsFromRedux> = (props) => {

    const didRequest = useRef(false)
    const dispatch = useDispatch()
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    const {accessToken} = useSelector<RootState>(({auth}) => auth, shallowEqual) as IAuthState

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const error = searchParams.get('error');
    const token = searchParams.get('token');

    useEffect(() => {

        const requestUser = async (tokenProps: string) => {
            try {
                if (!didRequest.current) {
                    // const {data} = await getUserByToken()

                    // setSession({accessToken: tokenProps});

                    const user = jwtDecode({token: tokenProps})
                    dispatch(props.fulfillUser(user))
                }
            } catch (error) {
                if (!didRequest.current) {
                    dispatch(props.logout())
                }
            } finally {
                setShowSplashScreen(false)
            }

            return () => (didRequest.current = true)
        }

        if (accessToken) {
            requestUser(accessToken)
        } else if (token) {
            requestUser(token)
            dispatch(props.login(token))
        } else {
            dispatch(props.logout())
            setShowSplashScreen(false)
        }
        // eslint-disable-next-line
    }, [])


    return showSplashScreen ? <LoadingPrimary/> : <>{props.children}</>
}

export default connector(AuthInit)
