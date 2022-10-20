import { apiUsers } from "../services/apiUsers"
import swal from "sweetalert"
import { AiFillDelete } from "react-icons/ai"

export function ButtonDelTeam({ id, token, action }) {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        apiUsers("DELETE", "team", { id }, token).then((response) => {
          if (response.result) {
            swal("Felicidades!", "Se a eliminado el equipo", "success")
            action()
          } else {
            swal("Oh!", "No se elimino ningun equipo", "Error")
          }
        })
      }}
    >
      <AiFillDelete />
    </button>
  )
}
