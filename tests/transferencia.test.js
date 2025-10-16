import http from 'k6/http';
import { sleep, check } from 'k6';
import { getToken } from './helpers/auth.js'
import { getBaseUrl } from '../utils/variaveis.js';


export const options = {
  iterations: 1,
};

export default function() {
  const token = getToken()

  const url = `$${getBaseUrl()}/transfers`
  const params = {
    headers:{
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ''
  })

  const resposta = http.post(url, payload, params)

  check(resposta, {
    'Validar que o status é igual a 200': (r) => r.status == 201,
  })

  sleep(1);
}
