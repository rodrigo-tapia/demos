import app from '../config/app'
import ConnectDB from '../../infra/db/mongodb/mongodb-connect'
const port = process.env.port ?? 3000
app.listen(port, () => {
  console.log(`app up and running on port: \x1b[32m%s\x1b[0m ${port}`)
  ConnectDB()
})
