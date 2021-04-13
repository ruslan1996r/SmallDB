import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { useInput } from '../../hooks/useInput'
import { GenericForm } from "../GenericForm/GenericForm"

function CreateForm(props) {
  const { state, setByKey, setValue } = useInput({})
  const { schema, itemAction, closeModal, title } = props

  const submit = e => {
    e.preventDefault()
    itemAction(state)
  }

  return (
    <div style={{ width: '500px', textAlign: "center" }}>
      <Typography component="h1" variant="h6" color="inherit" noWrap >
        {title}
      </Typography>
      <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
        <GenericForm schema={schema} state={state} setByKey={setByKey} setValue={setValue} />
      </div>
      <Button disableElevation onClick={closeModal}>
        Cancel
        <CloseIcon fontSize="large" style={{ color: "orange", marginLeft: "5px" }} />
      </Button>
      <Button disableElevation type="submit" onClick={submit}>
        Submit
        <CheckIcon fontSize="large" style={{ color: "#2ce62c", marginLeft: "5px" }} />
      </Button>
    </div>
  )
}

export default CreateForm
