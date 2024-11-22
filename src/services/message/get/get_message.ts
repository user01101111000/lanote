import {IMessage} from "../../../types/data/data_types.ts";
import {AxiosResponse} from "axios";
import {get_axios_instance} from "../../axios_instance.ts";

const get_message: (id: string) => Promise<IMessage> = async (id: string): Promise<IMessage> => {

    const response: AxiosResponse<IMessage> = await get_axios_instance().get("/messages/" + id);

    return response.data;

}


export default get_message;