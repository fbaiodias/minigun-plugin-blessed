import bunyan from 'bunyan'

const streams = []

if (process.env.NODE_ENV === 'development') {
  streams.push({
    level: 'debug',
    path: 'demo.log'  // log debug and above to a file
  })
}

const logger = bunyan.createLogger({
  name: 'minigun',
  streams
})

export default logger
