module.exports = function (router) {

  // mock数据
  router.post('/mock/***', function (req, res, next) {
    res.json({
      "success": true,
      "payload": {}
    })
  })
}
