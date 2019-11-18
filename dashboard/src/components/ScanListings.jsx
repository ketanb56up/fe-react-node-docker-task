import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import FullScreenDialog from './FullScreenDialog'
import Api from '../helpers/api'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}))

const ScanListings = () => {
  const classes = useStyles()
  const [securityScan, setScans] = useState([])
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    async function fetchData() {
      const {
        data: { data }
      } = await Api.fetch('/api/security-scan')
      setScans(data)
    }
    fetchData()
  }, [])

  return (
    <List className={classes.root}>
      {securityScan.map((scan, index) => (
        <div key={index} style={{ cursor: 'pointer' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://www.pngtube.com/myfile/detail/400-4001913_logo-placeholder-png-placeholder-icon-svg.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Repository Name"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {scan.repositoryName}
                  </Typography>
                  {}
                </React.Fragment>
              }
            />
            <ListItemText
              primary="Status"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {scan.status}
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemText
              primary="Queued At"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {new Date(scan.queuedAt).toDateString()}
                  </Typography>
                  {}
                </React.Fragment>
              }
            />
            <ListItemText
              primary="Scanning At"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {new Date(scan.scanningAt).toDateString()}
                  </Typography>
                  {}
                </React.Fragment>
              }
            />
            <ListItemText
              primary="Finished At"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {new Date(scan.finishedAt).toDateString()}
                  </Typography>
                  {}
                </React.Fragment>
              }
            />
            {scan.findings.length > 0 && (
              <>
                <Box m={2}>
                  <Badge
                    onClick={handleClickOpen}
                    badgeContent={scan.findings.length}
                    color="primary"
                  >
                    <MailIcon />
                  </Badge>
                </Box>
                <FullScreenDialog
                  findings={scan.findings}
                  open={open}
                  handleClose={handleClose}
                />
              </>
            )}
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}

export default ScanListings
