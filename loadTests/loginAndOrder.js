import { sleep, check, group, fail } from 'k6'
import http from 'k6/http'


export const options = {
  cloud: {
    distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
    apm: [],
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 5, duration: '30s' },
        { target: 15, duration: '1m' },
        { target: 10, duration: '30s' },
        { target: 0, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_2 - https://pizza.derekreesecs329devops.com/', function () {
    response = http.get('https://pizza.derekreesecs329devops.com/', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'if-modified-since': 'Thu, 05 Dec 2024 05:01:54 GMT',
        'if-none-match': '"949c5fbe678879d99943fc7b90b5cb38"',
        priority: 'u=0, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
      },
    })
    sleep(10.1)

    response = http.put(
      'https://pizza-service.derekreesecs329devops.com/api/auth',
      '{"email":"c@jwt.com","password":"c"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://pizza.derekreesecs329devops.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
        },
      }
    )
    if (!check(response, { 'status equals 200': response => response.status.toString() === '200' })) {
      console.log(response.body);
      fail('Login was *not* 200');
    }

    response = http.options('https://pizza-service.derekreesecs329devops.com/api/auth', null, {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'PUT',
        origin: 'https://pizza.derekreesecs329devops.com',
        priority: 'u=1, i',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
    })
    sleep(11.3)

    response = http.get('https://pizza-service.derekreesecs329devops.com/api/order/menu', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'if-none-match': 'W/"3f8-Ie5TQl703DstdLfLArR1NiNP++U"',
        origin: 'https://pizza.derekreesecs329devops.com',
        priority: 'u=1, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.options(
      'https://pizza-service.derekreesecs329devops.com/api/order/menu',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'access-control-request-headers': 'authorization,content-type',
          'access-control-request-method': 'GET',
          origin: 'https://pizza.derekreesecs329devops.com',
          priority: 'u=1, i',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
        },
      }
    )

    response = http.get('https://pizza-service.derekreesecs329devops.com/api/franchise', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'if-none-match': 'W/"af-trcosUbZHs501uJHn9qXAy1DYn0"',
        origin: 'https://pizza.derekreesecs329devops.com',
        priority: 'u=1, i',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
    })

    response = http.options('https://pizza-service.derekreesecs329devops.com/api/franchise', null, {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'GET',
        origin: 'https://pizza.derekreesecs329devops.com',
        priority: 'u=1, i',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
    })
    sleep(6.4)

    response = http.post(
      'https://pizza-service.derekreesecs329devops.com/api/order',
      '{"items":[{"menuId":2,"description":"Pepperoni","price":0.0042}],"storeId":"2","franchiseId":2}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://pizza.derekreesecs329devops.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
        },
      }
    )
    const vars = {};
    let orderData = response.json();
    let jwtToken = orderData.jwt;
    if (!jwtToken) {
      fail('JWT token not found in order response');
    }

    response = http.options('https://pizza-service.derekreesecs329devops.com/api/order', null, {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://pizza.derekreesecs329devops.com',
        priority: 'u=1, i',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
    })
    sleep(1.7)

    response = http.post(
      'https://pizza-factory.cs329.click/api/order/verify',
      // '{"jwt":"eyJpYXQiOjE3MzM1MzExMTAsImV4cCI6MTczMzYxNzUxMCwiaXNzIjoiY3MzMjkuY2xpY2siLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0bk5YT21jaWt6emlWZWNIcWE1UmMzOENPM1BVSmJuT2MzazJJdEtDZlEifQ.eyJ2ZW5kb3IiOnsiaWQiOiJkcHJlZXNlIiwibmFtZSI6IkRlcmVrIFJlZXNlIn0sImRpbmVyIjp7ImlkIjo3LCJuYW1lIjoiYyIsImVtYWlsIjoiY0Bqd3QuY29tIn0sIm9yZGVyIjp7Iml0ZW1zIjpbeyJtZW51SWQiOjIsImRlc2NyaXB0aW9uIjoiUGVwcGVyb25pIiwicHJpY2UiOjAuMDA0Mn1dLCJzdG9yZUlkIjoiMiIsImZyYW5jaGlzZUlkIjoyLCJpZCI6Mn19.wKjRcyannqJgbAMvurPelu4927JwNc9bx_mtSqExxoCF2xZTL7fvtvza-k9EbHlBEy0V8BedHyiKCZkklSUN96ZByA-ZTHiRlyJn7f9jH0nzst5GzG2QyMyAv4zd0B2LKjP79oTrK2AvSDQUlrRfCF-eB8G5M1shCYhU_9tFnYCICZrkFVIQjuQwfl4lUMzr4YIfpcve69iVcJ7vnuu5Mw4uuqTUvdNMqfFqMWx9ozwMAef7lBBJIpWfNV2pgVSHg0MNl4XEpfBWH_K1ZPo9ZabTSIoCC3kgmPF9uFA_czoTcxPWOxCpKQCKFBZDsbQGrCHj2SUHScCcSDuHc_VVfhbhFgpy5sSmlVRDsT2app5apWlEOcluiNRn24OFentO4LX1xZt62d00k9jb7x2twqOwtnpTndiAg5tbozEPxWBJ54dC-QebgRUCJxW4r8Ls_jQpptuL98mUrtE1CpW4I3mkdyjIUVyEveo4I3jdFyBkpBAyBLcRdXIjXxg3biDnMghZe-gC7ecusUCUMdRXDVQk2rKR0TswnPipOw5-_MUUpxDfvl14D46_0pTD19BYnNixj8oSydktoly-ZCchXM-X5NSYvWD1-uH28MNKMUGcRnFa6Ukb-OfCs3LrSJ9bjUHv4m4_tPIklypMRppJ7JCH3WUp2MZbSqvvVndVS_w"}',
      JSON.stringify({ jwt: jwtToken }),
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://pizza.derekreesecs329devops.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
        },
      }
    )
    if (!check(response, { 'status equals 200': (r) => r.status === 200 })) {
      fail('Order verification failed');
    }
    response = http.options('https://pizza-factory.cs329.click/api/order/verify', null, {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://pizza.derekreesecs329devops.com',
        priority: 'u=1, i',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
    })
  })
}
