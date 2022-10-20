import { apiUsers } from "../../services/apiUsers"
import { useState, useEffect } from "react"
import { ButtonDelEvent } from "../../components/ButtonDelEvent"

import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

export function Events() {
  const [sports, setSports] = useState([])
  const [teams, setTeams] = useState([])

  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const token = window.localStorage.getItem("token")

  function getData() {
    if (token) {
      apiUsers("GET", "event", "", token).then((results) => {
        if (results.event) {
          setEvents(results.event)
        }
      })
    } else {
      swal("Debes iniciar sesion!", "", "info")
      navigate("../user/login")
    }
  }
  function getDataSport() {
    if (token) {
      apiUsers("GET", "sport", "", token).then((results) => {
        if (results.sport) {
          setSports(results.sport)
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
    getData()
  }, [])

  return (
    <>
      <h3>Eventos</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Deporte</th>
            <th scope="col">Equipo 1</th>
            <th scope="col">Equipo 2</th>
            <th scope="col">Puntuacion Equipo 1</th>
            <th scope="col">Puntuacion Equipo 2</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            return (
              <tr key={event._id}>
                <td>{event.date ? event.date.split("T")[0] : ""}</td>
                <td>{sports.find((sport) => sport._id == event.sport)? sports.find((sport) => sport._id == event.sport).name :  'Error'}</td>
                <td>{teams.find((team) => team._id == event.team1)? teams.find((team) => team._id == event.team1).name: 'Error'}</td>
                <td>{teams.find((team) => team._id == event.team2)? teams.find((team) => team._id == event.team2).name: 'Error'}</td>
                <td>{event.scoreboardTeam1}</td>
                <td>{event.scoreboardTeam2}</td>
                <td>
                  <ButtonDelEvent
                    id={event._id}
                    token={token}
                    action={getData}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
