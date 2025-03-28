import {useMutation, UseMutationResult} from "@tanstack/react-query";
import delete_message from "../../services/message/delete/delete_message.ts";

const useDeleteMessage: () => UseMutationResult<void, unknown, string> = (): UseMutationResult<void, unknown, string> => {
    return useMutation({
        mutationFn: delete_message
    })
}

export default useDeleteMessage;