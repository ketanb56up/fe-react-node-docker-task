import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  }
}))

const scanStatus = [
  {
    value: 'queued',
    label: 'Queued'
  },
  {
    value: 'in-progress',
    label: 'In Progress'
  },
  {
    value: 'success',
    label: 'Success'
  },
  {
    value: 'failure',
    label: 'Failure'
  }
]

const SecurityScanForm = ({
  handleSubmit,
  handleChange,
  status,
  repositoryName
}) => {
  const classes = useStyles()

  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            className={classes.textField}
            name="repository_name"
            label="Repository Name"
            margin="normal"
            value={repositoryName}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            select
            label="Scan Status"
            name="status"
            className={classes.textField}
            value={status}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select status"
            margin="normal"
          >
            {scanStatus.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default SecurityScanForm
