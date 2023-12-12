import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from "./RootReducer";
import {UserModel} from "../../app/modules/auth/models/UserModel";

// @ts-ignore
export const useAuthSelector = () => {
    return useSelector<RootState>(({auth}) => auth.user, shallowEqual) as UserModel
};
