import { useState, useEffect } from "react"
import { apiUsers } from "../../services/apiUsers"
import swal from "sweetalert"
import { useNavigate, useParams } from "react-router-dom"

export function UpdateUser() {
  const { uuid } = useParams()

  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [birth, setBirth] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const navigate = useNavigate()
  const token = window.localStorage.getItem("token")

  useEffect(() => {
  
    if (!token) {
      swal("Debes iniciar sesion!", "", "info")
      navigate("../user/login")
    }
  }, [])
  

  const sendData = (e) => {
    e.preventDefault()

    apiUsers("PUT", "user", { uuid, name, email, birth, password },token).then(
      (results) => {
        if (!results.result) {  
          swal("Debes volver a iniciar sesion!", "Token expirado", "info")
          navigate('../user/login')
        }
        if (results.result) {
          swal("Felicidades!", "Se a actualizado el usuario", "success")

          navigate("../user")
        } else {
          swal("Oh!", "A ocurrido un error", "error")
          console.log(results)
        }
      }
    )
  }
  return (
    <>
      <form onSubmit={sendData} autoComplete="off">
        <legend>Actualizar</legend>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="input"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Correo
          </label>
          <input
            type="text"
            id="inputEmail"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputBirth" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            id="inputBirth"
            className="form-control"
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>

      <br />
    </>
  )
}
