const Services = require('../services/securityScan')

const securityScanController = {
  createScanResult: async (req, res) => {
    const resp = {
      message: '',
      error: ''
    }
    try {
      await Services.createScan(req.body)
      resp.message = 'Scan created successfully'
      res.status(200).json(resp)
    } catch (error) {
      console.log('Internal Server Error...', error)
      resp.message = 'Internal Server Error...'
      resp.error = error
      res.status(500).json(resp)
    }
  },
  getScanResult: async (req, res) => {
    const resp = {
      message: '',
      error: '',
      data: []
    }
    try {
      const scans = await Services.getScans()
      resp.message = 'Scans fetched successfully'
      resp.data = scans
      res.status(200).json(resp)
    } catch (error) {
      console.log('Internal Server Error...', error)
      resp.message = 'Internal Server Error...'
      resp.error = error
      res.status(500).json(resp)
    }
  }
}

module.exports = securityScanController
