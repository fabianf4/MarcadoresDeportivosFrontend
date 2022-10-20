import { apiUsers } from "../services/apiUsers"
import swal from "sweetalert"
import { AiFillDelete } from "react-icons/ai"

export function ButtonDelEvent({ id, token, action }) {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        apiUsers("DELETE", "event", { id }, token).then((response) => {
          if (response.result) {
            swal("Felicidades!", "Se a eliminado el evento", "success")
            action()
          } else {
            console.log(response)
            swal("Oh!", "No se elimino ningun evento", "Error")
          }
        })
      }}
    >
      <AiFillDelete />
    </button>
  )
}
