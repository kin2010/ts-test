import { Button } from "react-bootstrap"
import {remove,Removee } from "../api/useRemoveTodo"

type removeType={
    id:number
}

export const RemoveTodo=({index}:remove)=>{
  const removeMutation=Removee()
    return (
        <Button onClick={
            ()=>removeMutation.mutate({index:index})}>
                Delete
        </Button>
    )
}