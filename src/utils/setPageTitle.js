import router from '../router'
import { title } from './../settings'

ProjectTitle = title || 'Vue 3.0 Study'

export default function setPageTitle (routerTit = '') {
    if (routerTit) {
        return `${routerTit} - ${ProjectTitle}`
    }
    return `${ProjectTitle}`
}