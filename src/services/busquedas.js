import { http, local } from './config'

export default {
    pruebas: () => {
        return http.get('posts')
    },
    unidades: () => {
        return local.get('/data.json')
    }
}