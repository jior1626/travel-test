import CryptoJS from "crypto-js";
import { hotels } from "../data/hotel";
import { users } from "../data/user";
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

export const blobToBase64 = (blob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};

export const getImageBase64 = async (blob: any) => {
    return blobToBase64(blob).then(result => result);
}

export const generateIdToData = (model: string) => {
    const min = 1;
    const max = 100000;
    const rand = Math.floor(Math.random() * (max-min)) + min;
    return rand;
}