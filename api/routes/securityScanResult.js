const securityScanController = require('../controller/securityScanController')

const securityScanResult = router => {
  router.post('/api/security-scan', securityScanController.createScanResult)
  router.get('/api/security-scan', securityScanController.getScanResult)
}

module.exports = securityScanResult
