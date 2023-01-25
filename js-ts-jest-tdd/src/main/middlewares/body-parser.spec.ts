import request from 'supertest'
import app from '../config/app'

describe('Middlewares', () => {
  it('body-parser', async () => {
    app.post('/body-parser', (req, res) => {
      res.send(req.body)
    })
    await request(app).post('/body-parser').send({ name: 'lala' }).expect({ name: 'lala' })
  })
})
