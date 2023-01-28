import mongoose from 'mongoose'

export default (): void => {
  const url = process.env.mongodb_url ?? ''
  mongoose.set('strictQuery', false)
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  mongoose.connect(url, { dbName: 'tdd' }, (err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Base de datos puerto 27017: \x1b[32m%s\x1b[0m', 'Online')
    }
  })
}
