import { cities } from './cities'
import Fuse from 'fuse.js'

const fuse = new Fuse(cities, {
  threshold: 0.1,
})

export default function searchCities (keyword: string) {
  return fuse.search(keyword).slice(0, 5)
}

