import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
// const { Cart } = sequelize.models

router.get('/', async function (req, res) {
  // findAll是回傳所有資料
  const posts = await sequelize.query('SELECT * FROM `organizer`', {
    type: QueryTypes.SELECT,
  })

  // 標準回傳JSON
  return res.json({ status: 'success', data: { posts } })
})

export default router
