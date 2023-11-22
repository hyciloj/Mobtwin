import React, {FC, useRef, useEffect, useState} from 'react'
import {shallowEqual, useSelector, connect, useDispatch, ConnectedProps} from 'react-redux'
import * as auth from './AuthRedux'
import {getUserByToken} from './AuthCRUD'
import {RootState} from '../../../../setup'
import {LoadingPrimary} from "../../components/loading/LoadingPrimary";
import {useLocation} from "react-router-dom";

const mapState = (state: RootState) => ({auth: state.auth})
const connector = connect(mapState, auth.actions)
type PropsFromRedux = ConnectedProps<typeof connector> & {
  children: React.ReactNode;
};
const AuthInit: FC<PropsFromRedux> = (props) => {

  const didRequest = useRef(false)
  const dispatch = useDispatch()
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const accessToken = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const error = searchParams.get('error');
  const token = searchParams.get('token');


  // We should request user by authToken before rendering the application
  useEffect(() => {

    const requestUser = async () => {

      try {
        if (!didRequest.current) {

          const {data} = await getUserByToken()
          dispatch(props.fulfillUser(data))
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
      requestUser()
    } else if(token) {

      dispatch(props.login({accessToken: token}))
      requestUser()
    } else {
      dispatch(props.logout())
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LoadingPrimary /> : <>{props.children}</>
}

export default connector(AuthInit)
