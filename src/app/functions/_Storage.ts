import {ACCESS_TOKEN} from "../../config-global";

export function _GetStorage(key: string) {

    const storageKey = localStorage.getItem(key)
    if (!storageKey) {
        return null
    }
    return storageKey;
}

export function _SetStorage(key: string, value: string) {

    const storageKey = _GetStorage(key)
    if (!storageKey) {
        throw new Error('this key is not defined');
    }
    localStorage.setItem(key, value)
}

export function _GetToken() {

    return _GetStorage(ACCESS_TOKEN)
}