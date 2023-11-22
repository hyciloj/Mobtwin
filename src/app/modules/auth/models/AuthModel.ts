export interface AuthModel {
    status: number
    message_code: string
    message: string
    user: UserInterface
}

export interface LoginModel extends AuthModel {
    token: string
}

export interface RegisterModel extends AuthModel {

}

export interface UserInterface {
    id: number,
    name: string
    email: string
    role: string
    avatar: string,
    created_at: string,
    subscription: {},
    infos: {},
    workspace: WorkSpaceInterface
}

export interface WorkSpaceInterface {
    id: number,
    slug: string,
    name: string,
    count_app_building: 0,
    type_user: string,
    plan: string,
    end_at: null,
    active: false
}
