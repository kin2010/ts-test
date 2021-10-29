import { GetTodos } from "../../../FakerApi"
import { useQuery } from "react-query"
export const useGetTodo =()=>{
    return useQuery("todos", GetTodos);
}