const url = import.meta.env.VITE_URL_API

export async function apiUsers(method, ruta,data, token = "",image=undefined){
    let formData = new FormData()
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

    if (image){
        for(let i in data){
            formData.append(i,data[i])
        }
        formData.append('avatar',image)

        conf = {
            method: method,
            headers: {
                //'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        }
    }

    return fetch(url+ruta, conf)
    .then(response => response.json())
}