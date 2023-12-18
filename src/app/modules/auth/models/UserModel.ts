import {AuthModel} from "./AuthModel";

// export interface UserModel extends AuthModel{
//     tokenUser: string
// }

export interface UserModel {
    avatar: string
    email: string
    exp: number
    iat: number
    ip_address: string
    iss: string
    jti: string
    name: string
    nbf: number
    prv: string
    sub: string
    workspace: {
        active: true
        count_app_building: number
        count_img_generating: number
        name: string
        plan: string
        type_user: string
    }
}

export interface PropertiesReturnModel {
    status: number
    message_code: string
    message: string
}

// export interface UserModel {
//     id: number
//     username: string
//     password: string | undefined
//     email: string
//     firstName: string
//     lastName: string
//     fullName?: string
//     phone?: string
//     roles?: _Array<number>
//     pic?: string
//     language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
//     address?: UserAddressModel
//     socialNetworks?: UserSocialNetworksModel
// }