const SecurityScan = require('../model/securityScan')

const Services = {
  createScan: async scan => {
    const securityScan = new SecurityScan({ ...scan })
    await securityScan.save()
  },
  getScans: async () => await SecurityScan.find({})
}

module.exports = Services
