import React from 'react'

// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function DeleteForm(props) {
  const { deleteData, closeModal, title } = props
  return (
    <div style={{ width: '500px', textAlign: "center" }}>
      <Typography component="h1" variant="h6" color="inherit" noWrap style={{ marginBottom: "10px" }}>
        {title}
      </Typography>
      <Button disableElevation onClick={closeModal}>
        Cancel
        <CloseIcon fontSize="large" style={{ color: "orange", marginLeft: "5px" }} />
      </Button>
      <Button disableElevation onClick={deleteData}>
        Confirm
        <CheckIcon fontSize="large" style={{ color: "#2ce62c", marginLeft: "5px" }} />
      </Button>
    </div>
  )
}

export default DeleteForm
