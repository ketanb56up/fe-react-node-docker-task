import { http } from '../config/apiConfig'

const fetch = async url => await http.get(url)

const modify = async (url, body) => await http.put(url, body)

const destroy = async (url, data) => await http.delete(url, data)

const add = async (url, body) => await http.post(url, body)

const Api = { fetch, modify, destroy, add }

export default Api
