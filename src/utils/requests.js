export async function getIpInfo (params, requestType) {
    let type = requestType === 'ip' ? 'ipAddress' : requestType === 'email' ? 'email' : 'domain'
    let url = `https://geo.ipify.org/api/v1?apiKey=at_xB0E6aGdOs4TtDjUxDDboVQNSAt1S&${type}=${params}`

    let response = await fetch(url)
    return response.json()
  }