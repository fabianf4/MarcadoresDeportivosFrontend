import { apiUsers } from "../services/apiUsers"
import swal from "sweetalert"
import { AiFillDelete } from "react-icons/ai"

export function ButtonDelUser({ uuid, token, action }) {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        apiUsers("DELETE", "user", { uuid }, token).then((response) => {
          if (response.result) {
            swal("Felicidades!", "Se a eliminado el usuario", "success")
            action()
          } else {
            swal("Oh!", "No se elimino ningun usuario", "Error")
          }
        })
      }}
    >
      <AiFillDelete />
    </button>
  )
}
