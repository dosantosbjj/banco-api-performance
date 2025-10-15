import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
        'http_req_failed': ['rate<0.01'],
        'http_req_duration': ['p(90)<1000', 'max<3000']
    }
}

export default function (){
    const url = 'http://localhost:3000/users/login'
    const payload = JSON.stringify({
        username: 'julio',
        password: '123456'
    })

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const resposta = http.post(url, payload, params)
    check(resposta, {
        "Validar que o status é igual a 200": (r) => r.status == 200,
        "Validar que o token é uma string": (r) => typeof(r.json().token) == 'string'
    }) 
    sleep(1)
}