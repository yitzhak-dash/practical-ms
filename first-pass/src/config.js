const createDb = require('./db')
const createHomeApp = require('./app/home')


function createConfig({ env }) {
  const db = createDb({ connectionString: env.databaseUrl })
  const homeApp = createHomeApp({ db })
  return {
    env,
    db,
    homeApp,
  }
}

module.exports = createConfig