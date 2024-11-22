import {v4} from "uuid"
import {get_axios_instance} from "../../axios_instance.ts";

const post_message: (message: string) => Promise<void> = async (message: string): Promise<void> => {

    const id: string = v4().replace(/-/g, "");


    const data = {
        "fields": {
            "message": {
                "stringValue": message
            },
            "id": {
                "stringValue": id
            },
            "date": {
                "timestampValue": new Date().toISOString()
            }
        }
    }


    await get_axios_instance().patch("/messages/" + id, data);

}

export default post_message;