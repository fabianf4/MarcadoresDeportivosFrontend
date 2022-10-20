import { useState } from "react"
import { apiUsers } from "../../services/apiUsers"
import swal from "sweetalert"

import { useNavigate } from "react-router-dom"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault()

    apiUsers("POST", "user/login", { email, password }).then((results) => {
      if (results.login) {
        window.localStorage.setItem("token", results.token)

        swal("Felicidades!", "A iniciado sesion", "success")

        navigate("/user")
      } else {
        swal("Oh!", "Usuario y/o contraseña incorrectos", "error")
      }
    })
  }
  return (
    <>
      <form onSubmit={sendData} autoComplete='off'>
        <legend>Iniciar sesion</legend>

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
          Enviar
        </button>
      </form>
    </>
  )
}
