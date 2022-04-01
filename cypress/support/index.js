import './common/commands'
import './common/api_commands'
import './common/env_orders'
import './commands.js'

// only preserve admin cookies
Cypress.Cookies.defaults({
  preserve: 'VtexIdclientAutCookie',
})

// Avoid application errors
Cypress.on('uncaught:exception', () => {
  return false
})
