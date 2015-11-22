import bunyan from 'bunyan'

const logger = bunyan.createLogger({
  name: 'minigun',
  streams: [
    {
      level: 'debug',
      path: 'demo.log'  // log debug and above to a file
    }
  ]
})

export default logger
