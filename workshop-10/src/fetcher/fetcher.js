function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}

export function get(url) {
  const token = localStorage.getItem('token');

  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  })
    .then((response) => checkStatus(response))
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

export function post(url, data) {
  const token = localStorage.getItem('token');

  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
    body: JSON.stringify(data || {})
  })
    .then((response) => checkStatus(response))
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
