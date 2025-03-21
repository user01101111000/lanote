import {useMutation, UseMutationResult} from "@tanstack/react-query";
import post_message from "../../services/message/post/post_message.ts";

const usePostMessage: () => UseMutationResult<string, unknown, string> = (): UseMutationResult<string, unknown, string> => {
    return useMutation({
        mutationFn: post_message
    });
}

export default usePostMessage;