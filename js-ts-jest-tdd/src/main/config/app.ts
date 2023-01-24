import express = require('express')
import { config as dotenv } from 'dotenv'
import routes from './routes'

dotenv()
const app = express()
routes(app)
export default app
