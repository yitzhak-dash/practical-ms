const camelCase = require('camelcase-keys')
const express = require('express')

function createHandlers({ queries }) {
  function home(req, res, next) {
    return queries
      .loadHomeData()
      .then(viewData =>
        res.render('home/templates/home', viewData)
      )
      .catch(next)
  }

  return home
}

function createQueries({ db }) {
  return {}
}

function createHome({ db }) {
  const queries = createQueries(db)
  const handlers = createHandlers(queries)

  const router = express.Router()

  router.route('/').get(handlers.home)

  return { handlers, queries, router }
}

module.exports = createHome