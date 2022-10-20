import { useEffect, useState } from "react"
import { apiUsers } from "../../services/apiUsers"
import { useNavigate } from "react-router-dom"

export function CreateEvent() {
  const [sports, setSports] = useState([])
  const [teams, setTeams] = useState([])

  const [date, setDate] = useState(undefined)
  const [sport, setSport] = useState(undefined)
  const [team1, setTeam1] = useState(undefined)
  const [team2, setTeam2] = useState(undefined)
  const [scoreboardTeam1, setScoreboardTeam1] = useState(undefined)
  const [scoreboardTeam2, setScoreboardTeam2] = useState(undefined)

  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()

  const sendData = (e) => {
    e.preventDefault()

    apiUsers(
      "POST",
      "event",
      {
        date,
        sport,
        team1,
        team2,
        scoreboardTeam1,
        scoreboardTeam2
      },
      token
    ).then((results) => {
      if (results.result) {
        swal("Felicidades!", "A creado un evento", "success")

        navigate("../event")
      } else {
        swal("Oh!", "A ocurrido un error", "error")
      }
    })
  }

  function getDataSport() {
    if (token) {
      apiUsers("GET", "sport", "", token).then((results) => {
        if (results.sport) {
          setSports(results.sport)
          setSport(results.sport[0]._id)
        }
      })
    } else {
      swal("Debes iniciar sesion!", "", "info")
      navigate("../user/login")
    }
  }

  function getDataTeam() {
    if (token) {
      apiUsers("GET", "team", "", token).then((results) => {
        if (results.team) {
          setTeams(results.team)
          setTeam1(results.team[0]._id)
          setTeam2(results.team[0]._id)
        }
      })
    } else {
      swal("Debes iniciar sesion!", "", "info")
      navigate("../user/login")
    }
  }

  useEffect(() => {
    getDataSport()
    getDataTeam()
  }, [])

  return (
    <>
      <form onSubmit={sendData} autoComplete="off">
        <legend>Crear Evento</legend>

        <div className="mb-3">
          <label htmlFor="inputDate" className="form-label">
            Fecha del evento
          </label>
          <input
            type="Date"
            id="inputDate"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputNameSport" className="form-label">
            Seleccione el deporte:
          </label>
          <select
            className="form-select"
            onChange={(e) => {
              setSport(e.target.value)
            }}
          >
            {sports.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="inputNameTeam1" className="form-label">
            Seleccione el Equipo 1:
          </label>
          <select
            className="form-select"
            onChange={(e) => {
              setTeam1(e.target.value)
            }}
          >
            {teams.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputNameTeam2" className="form-label">
            Seleccione el Equipo 2:
          </label>
          <select
            className="form-select"
            onChange={(e) => {
              setTeam2(e.target.value)
            }}
          >
            {teams.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputScoreboardTeam1" className="form-label">
            Puntuacion equipo 1
          </label>
          <input
            type="Number"
            id="inputScoreboardTeam1"
            className="form-control"
            onChange={(e) => setScoreboardTeam1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputScoreboardTeam2" className="form-label">
            Puntuacion equipo 2
          </label>
          <input
            type="Number"
            id="inputScoreboardTeam2"
            className="form-control"
            onChange={(e) => setScoreboardTeam2(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Evento
        </button>
      </form>
    </>
  )
}
