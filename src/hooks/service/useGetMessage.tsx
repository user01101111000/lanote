import {useQuery, UseQueryResult} from "@tanstack/react-query";
import get_message from "../../services/message/get/get_message.ts";
import {IMessage} from "../../types/data/data_types.ts";

const useGetMessage: (id: string) => UseQueryResult<IMessage> = (id: string): UseQueryResult<IMessage> => {
    return useQuery({
        queryKey: ['message', id],
        queryFn: (): Promise<IMessage> => get_message(id),
        staleTime: 300000,
        retry: 1,
    });
}

export default useGetMessage;