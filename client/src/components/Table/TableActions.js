import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

export function TableActions() {
  return (
    <div>
      <Button disableElevation>
        <EditIcon style={{ color: "#3aa8ff" }} />
      </Button>
      <Button disableElevation>
        <DeleteIcon style={{ color: "red" }} />
      </Button>
    </div>
  )
}