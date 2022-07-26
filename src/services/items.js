import axios from 'axios'

const item = {}

item.find = () => axios.get('/items')

export { item }
