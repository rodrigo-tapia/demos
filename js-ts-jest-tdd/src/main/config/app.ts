import express = require('express')
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

dotenv()
const app = express()
middlewares(app)
routes(app)
export default app
