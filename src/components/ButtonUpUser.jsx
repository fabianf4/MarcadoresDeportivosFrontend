import { apiUsers } from "../services/apiUsers"
import swal from "sweetalert"
import { AiFillEdit } from "react-icons/ai"
import { Link } from "react-router-dom"

export function ButtonUpUser({ uuid, token, action }) {
  return (
    <Link to={`/update/${uuid}`} className='btn btn-primary'> <AiFillEdit/> </Link>      
  )
}
