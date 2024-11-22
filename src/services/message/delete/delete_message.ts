import {get_axios_instance} from "../../axios_instance.ts";

const delete_message: (id: string) => Promise<void> = async (id: string): Promise<void> => {

    await get_axios_instance().delete("/messages/" + id);

}

export default delete_message;