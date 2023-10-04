export interface AuthModel {
    message: string
    message_code: string
    status: number
}
export interface LoginModel extends AuthModel {
    user: {
        id: number
        name: string
        email: string,
        role: string
        workspace: null
    }
    token: string
}
export interface RegisterModel extends AuthModel{

}