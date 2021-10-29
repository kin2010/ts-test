import { useQueryClient, useMutation } from "react-query";
import { addTodo } from "../../../FakerApi";
type todo={
  data:string
}
export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todoDescription:string) => addTodo(todoDescription), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onMutate: async (newTodo)=>{
      await queryClient.cancelQueries("todos")
      const preTodo=queryClient.getQueryData<todo[]>("todos")
      queryClient.setQueryData("todos",[...(preTodo||[]),newTodo])
      return {preTodo}
    }
    // onMutate: variables => {
    //   // A mutation is about to happen!
  
    //   // Optionally return a context containing data to use when for example rolling back
    //   return { id: 1 }
    // },
    // onError: (error, variables, context) => {
    //   // An error happened!
    //   console.log("eror")
    // },
   
    // onSettled: (data, error, variables, context) => {
    //   // Error or success... doesn't matter!
    //   console.log("setted")
    // },
  });
};