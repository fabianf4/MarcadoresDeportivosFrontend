import { apiUsers } from "../../services/apiUsers"
import { useState, useEffect } from "react"
import { ButtonDelSport } from "../../components/ButtonDelSport"

import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

export function Sports() {
  const navigate = useNavigate()
  const [sports, setSports] = useState([])
  const token = window.localStorage.getItem("token")

  function getData(){
    if (token) {
      apiUsers("GET", "sport", "", token).then((results) => {
        if(results.sport){
          setSports(results.sport)
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
      <h3>Deportes</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sports.map((sport) => {
            return (
              <tr key={sport._id}>
                <td>{sport.name}</td>
                
                <td>
                  <ButtonDelSport id={sport._id} token={token} action={getData} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
