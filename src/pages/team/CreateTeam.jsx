import { useState, useEffect } from "react"
import { apiUsers } from "../../services/apiUsers"
import { useNavigate } from "react-router-dom"

export function CreateTeam() {
  const [name, setName] = useState(undefined)
  const navigate = useNavigate()
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    tokenValidate()
  }, [])

  function tokenValidate() {
    if (!token) {
      swal("Debes iniciar sesion!", "", "info")
      navigate("../user/login")
    }
  }

  const sendData = (e) => {
    e.preventDefault()

    apiUsers("POST", "team", { name }, token).then((results) => {
      if (results.result) {
        swal("Felicidades!", "A creado un equipo", "success")

        navigate("/team")
      } else {
        swal("Oh!", "A ocurrido un error", "error")
      }
    })
  }

  return (
    <>
      <form onSubmit={sendData} autoComplete="off">
        <legend>Crear Equipo</legend>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nombre del equipo
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Equipo
        </button>
      </form>
    </>
  )
}
