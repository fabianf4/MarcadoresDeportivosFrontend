import { apiUsers } from "../../services/apiUsers"
import { useState, useEffect } from "react"
import { ButtonDelTeam } from "../../components/ButtonDelTeam"

import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

export function Teams() {
  const navigate = useNavigate()
  const [teams, setTeams] = useState([])
  const token = window.localStorage.getItem("token")

  function getData(){
    if (token) {
      apiUsers("GET", "team", "", token).then((results) => {
        if(results.team){
          setTeams(results.team)
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
      <h3>Equipos</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => {
            return (
              <tr key={team._id}>
                <td>{team.name}</td>
                
                <td>
                  <ButtonDelTeam id={team._id} token={token} action={getData}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
