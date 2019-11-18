const securityScanResult = require('./securityScanResult')

const Routes = router => {
  securityScanResult(router)
}

module.exports = Routes
