import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { html: 'test', title: 'Express' })
})

export default router
