// Rest API
// See: https://github.com/lexich/redux-api

define(['redux-api'],
function (reduxApi) {
  const prefix = '/api/v1'

  return reduxApi({
    category: '${prefix}/category/:id',
    post: '${prefix}/post/:id',
    comment: '${prefix}/comment/:id',
    logs: '${prefix}/logs/:id',
    series: '${prefix}/series/:id',
    user: '${prefix}/user/:id'
  })
})
