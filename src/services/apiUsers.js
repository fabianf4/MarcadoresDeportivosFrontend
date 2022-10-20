const url = import.meta.env.VITE_URL_API

export async function apiUsers(method, ruta,data, token = ""){
    let conf ={}
    if(data){
        conf = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
    }else {
        conf = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
    return fetch(url+ruta, conf)
    .then(response => response.json())
}