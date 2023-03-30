import CryptoJS from "crypto-js";
import { constants } from "./constants";

export const encrypt = (data: any) => {

    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), constants.secretPass);

    return encrypted.toString();
}

export const decrypt = (data: any) => {

    var textDecrypted = CryptoJS.AES.decrypt(data, constants.secretPass);
    const decrypted = JSON.parse(textDecrypted.toString(CryptoJS.enc.Utf8));

    return decrypted;
}

export const getItemLocalStorage = (item: string) => {
    let data = localStorage.getItem(item);
    if (data) {
        return JSON.parse(data);
    } else {
        return null;
    }
}

export const setItemLocalStorage = (item: string, data: any) => {
    localStorage.setItem(item, JSON.stringify(data));
}