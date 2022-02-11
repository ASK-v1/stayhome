const { connect } = require('mongoose')
const { mongoURI } = require('./keys')

const connectionString = process.env.MONGODB_CONNECTION_STRING || mongoURI
connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
