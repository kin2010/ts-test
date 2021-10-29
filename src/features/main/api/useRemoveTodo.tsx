import { useMutation, useQueryClient } from "react-query";
import {removeTodo}  from "../../../FakerApi"
export type remove={
    index:number
}
export const Removee = () => {
  const queryClient = useQueryClient();

  return useMutation(({index}:remove) => removeTodo(index), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};