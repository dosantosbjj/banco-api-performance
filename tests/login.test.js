import http from 'k6/http'
import { check, sleep } from 'k6'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { getBaseUrl } from '../utils/variaveis'

export const options = {
  iterations: 10,
  // stages: [
  //   { duration: '10s', target: 10 },
  //   { duration: '20s', target: 10 },
  //   { duration: '10s', target: 30 },
  //   { duration: '20s', target: 30 },
  //   { duration: '20s', target: 0 },
  // ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(90)<1000', 'max<3000'],
  },
}

export default function () {
  const url = `${getBaseUrl()}/users/login`
  const payload = JSON.stringify(postLogin)

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const resposta = http.post(url, payload, params)
  check(resposta, {
    'Validar que o status é igual a 200': (r) => r.status == 200,
    'Validar que o token é uma string': (r) =>
      typeof r.json().token == 'string',
  })
  sleep(1)
}
