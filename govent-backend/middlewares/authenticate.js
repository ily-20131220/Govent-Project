import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// Authentication middleware
function authenticate(req, res, next) {
  const token = req.cookies.auth_token // 去得到存在 cookie 裡的 token

  // Log for debugging purposes
  console.log('Cookies:', req.cookies)
  console.log('Token extracted from cookie:', token)

  if (!token) {
    return res.status(403).send({ message: '沒有找到 Token' })
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: '驗證 Token 失敗' })
    }

    req.user = decoded // 將 user 的資料進行解碼
    next()
  })
}

export default authenticate
