import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '##/configs/db.js'
import { QueryTypes } from 'sequelize'

router.get('/', async function (req, res) {
  // findAll是回傳所有資料
  const posts = await sequelize.query('SELECT * FROM `activity_category`', {
    type: QueryTypes.SELECT,
  })

  // 標準回傳JSON
  return res.json({ status: 'success', data: { posts } })
})

export default router
