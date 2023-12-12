export default function setupAxios(axios: any, store: any) {

    axios.interceptors.request.use(
        (config: any) => {
            const {
                auth: {accessToken, user},
            } = store.getState()

            const tokenUser = user?.tokenUser

            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
                config.headers.AuthorizationUser = `${tokenUser}`
            }

            return config
        },
        (err: any) => Promise.reject(err)
    )
}
