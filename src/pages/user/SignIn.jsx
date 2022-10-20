import { useState } from "react"
import { apiUsers } from "../../services/apiUsers"
import swal from "sweetalert"
import {useNavigate} from 'react-router-dom'

export function SignIn() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birth, setBirth] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault()

    apiUsers("POST", "user", { name, email, birth ,password}).then((results) => {
      if (results.result) {

        swal("Felicidades!", "Se a registrado", "success")

        navigate('../user/login')
      } else {
        swal("Oh!", "A ocurrido un error", "error")
        console.log(results)
      }
    })
  }
  return (
    <>
      <form onSubmit={sendData} autoComplete='off'>
        <legend>Registrarse</legend>

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
        <div className="mb-3">
          <label htmlFor="inputImage" className="form-label">
            Imagen
          </label>
          <input type="file" id="inputImage" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      <br />
    </>
  )
}
