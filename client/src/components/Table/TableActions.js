import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

export function TableActions(props) {
  const { changeModalShow, row } = props
  return (
    <div>
      <Button disableElevation onClick={() => changeModalShow(true, 'edit', row)}>
        <EditIcon style={{ color: "#3aa8ff" }} />
      </Button>
      <Button disableElevation onClick={() => changeModalShow(true, 'delete', row)}>
        <DeleteIcon style={{ color: "red" }} />
      </Button>
    </div>
  )
}