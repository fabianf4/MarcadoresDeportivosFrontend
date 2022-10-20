import { apiUsers } from "../../services/apiUsers"
import { useState, useEffect } from "react"
import { ButtonDelUser } from "../../components/ButtonDelUser"
import { ButtonUpUser } from "../../components/ButtonUpUser"

import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

export function User() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const token = window.localStorage.getItem("token")

  function getData(){
    if (token) {
      apiUsers("GET", "user", "", token).then((results) => {
        if (!results.result) {  
          swal("Debes volver a iniciar sesion!", "Token expirado", "info")
          navigate('../user/login')
        }
        if(results.users){
          setUsers(results.users)
        }
      })
    }else{
      swal("Debes iniciar sesion!", "", "info")
      navigate('../user/login')
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <h3>Users</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.uuid}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password ? "SI" : "NO"}</td>
                <td>{user.birth? user.birth.split("T")[0]: ''}</td>
                <td>{user.image? "Si" : "No"}</td>
                <td>
                  <ButtonUpUser uuid={user.uuid}/>
                     
                  <ButtonDelUser uuid={user.uuid} token={token} action={getData}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
