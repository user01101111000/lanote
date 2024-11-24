import axios, {AxiosInstance} from "axios";

const get_axios_instance: () => AxiosInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: `https://firestore.googleapis.com/v1/projects/lanote-43220/databases/(default)/documents`
    })
}

export {get_axios_instance}