import React, { useState } from 'react'
import Api from '../helpers/api'
import Snackbar from '@material-ui/core/Snackbar'
import SecurityScanForm from './SecurityScanForm'
import NotificationWrapper from './NotificationWrapper'

const Dashboard = () => {
  const [status, setStatus] = useState('queued')
  const [repositoryName, setRepositoryName] = useState('https://')
  const [open, setOpen] = useState(false)
  const [notify, setMessage] = useState({ message: '', type: 'success' })

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
    const response = await Api.add('/api/security-scan', {
      status,
      repositoryName
    })
    setOpen(true)
    setMessage({
      message: response.data.message,
      type: response.status === 200 ? 'success' : 'error'
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <SecurityScanForm
        handleChange={handleChange}
        status={status}
        repositoryName={repositoryName}
        handleSubmit={handleSubmit}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <NotificationWrapper
          onClose={handleClose}
          variant={notify.type}
          message={notify.message}
        />
      </Snackbar>
    </>
  )
}

export default Dashboard
