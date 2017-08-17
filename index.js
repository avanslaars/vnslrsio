'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
    host: 'localhost',
    port: 8000
})

server.route([{
  method: 'GET',
  path:'/',
  handler: (request, reply) => reply.redirect('https://vanslaars.io')
}, {
  method: 'GET',
  path:'/react',
  handler: (request, reply) => reply.redirect('https://egghead.io/courses/build-your-first-production-quality-react-app')
}, {
  method: 'GET',
  path:'/redux',
  handler: (request, reply) => reply.redirect('https://egghead.io/courses/build-a-react-app-with-redux')
}, {
  method: 'GET',
  path:'/ramda',
  handler: (request, reply) => reply.redirect('https://egghead.io/playlists/learn-ramda-js-ec318ad7')
}, {
  method: 'GET',
  path:'/egghead',
  handler: (request, reply) => reply.redirect('https://egghead.io/instructors/andrew-van-slaars')
}])

server.start((err) => {

    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
