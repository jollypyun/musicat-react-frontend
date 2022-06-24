import axios from 'axios'
const headers = {}

const flatObject = (object, prefix = '') => {
  return Object.keys(object).reduce((carry, key) => {
    const pre = prefix ? prefix + `.${key}` : ''

    if (Array.isArray(object[key])) {
      carry = object[key].reduce((array, value, index) => {
        array[(pre || key) + `[${index}]`] = value
        return array
      }, carry)
    } else if (object[key] && typeof object[key] === 'object') {
      Object.assign(carry, flatObject(object[key], pre || key))
    } else {
      carry[pre || key] = object[key]
    }

    return carry
  }, {})
}

const customParamsSerializer = (params) => {
  const queryString = new URLSearchParams()
  for (const [key, value] of Object.entries(flatObject(params))) {
    if (value !== null && value !== undefined && value !== '') {
      queryString.append(key, value)
    }
  }

  return queryString.toString()
}

const getPromise = (method, uri, data = null, options = null) => {
  // if (options == null || options.headers == null || options.headers['X-Location-Pathname'] == null) {
  //   headers['X-Location-Pathname'] = router.currentRoute.path
  // }

  const config = {
    method: method,
    url: uri,
    ...options,
    headers: {
      ...headers,
      ...(options && options.headers)
    }
  }

  if (method.toUpperCase() === 'GET') {
    config.params = data
    config.paramsSerializer = (params) => customParamsSerializer(params)
  } else {
    config.data = data
  }

  return axios(config)
    .then((response) => {
      if (response) {
        return Promise.resolve(response.data)
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        return error.response.data
      }
      return Promise.reject(error)
    })
}

export default {
  getPromise
}
