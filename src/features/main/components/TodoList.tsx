import { useGetTodo } from "../api/GetTodo"
import { RemoveTodo } from "./RemoveTodo"

export const Todolist=()=>{
    const { data, isLoading, isFetching } = useGetTodo()
    if(isLoading)return(
        <div>Loading...</div>
      )
      
    return (
        <>
          {
        data&&data.map((todo,index)=>{
          return(
            <div key={index} className="d-flex flex-row justify-content-between">
              <div>{todo}</div>
              <div className="f-end">
                  <RemoveTodo index={index}/>
              </div>
            </div>
          )
        })
        
      }</>
    )
}