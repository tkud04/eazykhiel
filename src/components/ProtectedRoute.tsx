import { useEazykhielSelector } from '../store'
import { useNavigate } from 'react-router-dom'

type props = {
   children: JSX.Element,
   dest?: string
}

const ProtectedRoute = ({children,dest='/login'}:props) => {
    const navigate = useNavigate()
    const {email,role} = useEazykhielSelector(state => state.common)
   
    if(email?.length < 1){
       navigate(dest)
    }
 
    return children
 }

export default ProtectedRoute
