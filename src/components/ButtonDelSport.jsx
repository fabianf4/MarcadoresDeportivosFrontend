import { apiUsers } from "../services/apiUsers"
import swal from "sweetalert"
import { AiFillDelete } from "react-icons/ai"

export function ButtonDelSport({ id, token, action }) {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        apiUsers("DELETE", "sport", { id }, token).then((response) => {
          if (response.result) {
            swal("Felicidades!", "Se a eliminado el deporte", "success")
            action()
          } else {
            console.log(response)
            swal("Oh!", "No se elimino ningun deporte", "Error")
          }
        })
      }}
    >
      <AiFillDelete />
    </button>
  )
}
