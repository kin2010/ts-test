import { Todo } from "../features/main"
import {Route,BrowserRouter as Router,Switch} from "react-router-dom"
export const AppRouter =(props:any)=>{
   const commonRouter=[
       {path:"/",element:<Todo/>}
   ]
//    const element=useRoutes([...commonRouter])
    return (
        <>
    
            <Router>
                <Switch>
                <Route exact path="/" component={Todo} ></Route>
        
                </Switch>
            </Router>
        
        </>
    )
}