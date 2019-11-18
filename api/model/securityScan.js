const mongoose = require('mongoose')

const securityScanSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      lowercase: true,
      enum: ['queued', 'in-progress', 'success', 'failure'],
      default: 'queued',
      required: true
    },
    repositoryName: {
      type: String,
      require: true
    },
    findings: {
      type: JSON
    },
    queuedAt: {
      type: Date,
      default: Date.now
    },
    scanningAt: {
      type: Date,
      default: Date.now
    },
    finishedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
)

const SecurityScan = mongoose.model('SecurityScan', securityScanSchema)

module.exports = SecurityScan
