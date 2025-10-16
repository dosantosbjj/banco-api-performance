import http from 'k6/http'
import { getBaseUrl } from '../../utils/variaveis'
const postLogin = JSON.parse(open('../../fixtures/postLogin.json'))
export function getToken() {
  const url = `${getBaseUrl()}/users/login`
  const payload = JSON.stringify(postLogin)

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const resposta = http.post(url, payload, params)
  return resposta.json('token')
}
