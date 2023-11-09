import {UserAddressModel} from "./UserAddressModel";
import {UserSocialNetworksModel} from "./UserSocialNetworksModel";

export interface UserModel {
    id: number
    name: string
    email: string | undefined
    workspace: string
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
//     roles?: Array<number>
//     pic?: string
//     language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
//     address?: UserAddressModel
//     socialNetworks?: UserSocialNetworksModel
// }