import React, { useState } from 'react'
import Api from '../helpers/api'
import SecurityScanForm from './SecurityScanForm'

const Dashboard = () => {
  const [status, setStatus] = useState('queued')
  const [repositoryName, setRepositoryName] = useState('https://')

  const handleChange = event => {
    switch (event.target.name) {
      case 'repository_name':
        setRepositoryName(event.target.value)
        break
      case 'status':
        setStatus(event.target.value)
        break
      default:
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    await Api.add('/api/security-scan', { status, repositoryName })
  }

  return (
    <SecurityScanForm
      handleChange={handleChange}
      status={status}
      repositoryName={repositoryName}
      handleSubmit={handleSubmit}
    />
  )
}

export default Dashboard
