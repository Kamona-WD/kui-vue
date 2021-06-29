import * as components from './components'
import * as kui from './kui'

export * from './components'
export * from './kui'

export const createKui = (options = {}) => {
  return kui.createKUI({ components, ...options })
}
