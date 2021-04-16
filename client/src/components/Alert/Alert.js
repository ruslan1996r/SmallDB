import React, { useContext, useEffect } from 'react'
import Collapse from '@material-ui/core/Collapse';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import { SmallContext } from "../../context/state"

export function AppAlert(props) {
  const { alertInfo, setAlert } = useContext(SmallContext)
  const { type = 'error' } = props

  const alertStyle = {
    position: "absolute",
    zIndex: "100",
    right: "20px",
    top: "85px"
  }
  const closeStyle = {
    position: "absolute",
    top: "5px",
    right: '5px',
    cursor: "pointer"
  }

  useEffect(() => {
    setTimeout(function () {
      setAlert(null)
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertInfo])

  return (
    <Collapse in={!!alertInfo} style={alertStyle}>
      <Alert severity={type}>
        <AlertTitle>Error</AlertTitle>
        <p>{alertInfo && alertInfo.message.sqlMessage}</p>
        <CloseIcon fontSize="default" onClick={() => setAlert(null)} style={closeStyle} />
      </Alert>
    </Collapse>
  )
}