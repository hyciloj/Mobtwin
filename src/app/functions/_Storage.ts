import {ACCESS_TOKEN} from "../../config-global";

export function _GetStorage(key: string) {

    const storageKey = localStorage.getItem(key)
    if (!storageKey) {
        return null
    }
    return storageKey;
}

export function _SetStorage(key: string, value: string) {

    localStorage.setItem(key, value)
}

export function _RemoveStorage(key: string) {

    localStorage.removeItem(key)
}

export function _GetToken() {

    return _GetStorage(ACCESS_TOKEN)
}

export function _SetToken(value: string) {

    _SetStorage(ACCESS_TOKEN, value)
}