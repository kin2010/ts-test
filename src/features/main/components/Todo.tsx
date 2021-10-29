
import { useGetTodo } from "../api/GetTodo";
import { todoType } from "../../../FakerApi";
import { idText } from "typescript";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddTodo } from "../api/useAddTodo";
import {Button, Col, Row} from "react-bootstrap"
import {Container} from "@mui/material"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Todolist } from "./TodoList";
type FormValues = {
  firstName: string;
  // lastName: string;
  // email: string;
};
const schema=yup.object().shape({
  firstName:yup.string().min(4).max(10).required()
})
export const Todo=()=>{
  const { data, isLoading, isFetching } = useGetTodo()
  const { register, handleSubmit,formState:{errors} } = useForm<FormValues>(
    {
      resolver:yupResolver(schema)
    }
  );
  const addMutation = useAddTodo();

  
  const onSubmit: SubmitHandler<FormValues> = (add:FormValues)  =>  addMutation.mutate(add.firstName);
  return (
     
      <>
      <Container >
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col>        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName",{required:true})} />
      {/* <input {...register("lastName")} />
      <input type="email" {...register("email")} /> */}
      {Object.keys(errors).length!==0&&(
        <ul>
         {errors.firstName?.type=="required"&&<li>firstname required</li>}
         {errors?.firstName&&<li>{errors.firstName.message}</li>}
        </ul>)
      }
      <input type="submit" value="Add"/>
    </form>    
      {/* <Button variant="success">haha</Button> */}
      {isFetching&&
    <div>Updating...</div>}
  
          </Col>
          <Col>
          <Todolist></Todolist>
        </Col>

       
        </Row>

      </Container>

     
      
      
      </>
  )
    
  }