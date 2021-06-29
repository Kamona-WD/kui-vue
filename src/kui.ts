import type { App } from 'vue'

export interface KuiOptions {
  auttoRegisterComponents?: Boolean
  components?: Record<string, any>
  directives?: Record<string, any>
}

export const createKUI = (options: KuiOptions) => {
  const install = (app: App) => {
    const { auttoRegisterComponents = false, components = {}, directives = {} } = options

    for (const key in directives) {
      const directive = directives[key]

      app.directive(key, directive)
    }

    for (const key in components) {
      const component = components[key]

      app.component(key, component)
    }
  }

  return { install }
}
