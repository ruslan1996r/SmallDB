import React from 'react'
// import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


import { useInput } from '../../hooks/useInput'
// import { toUpper } from "../Table/TableUtils"
import { GenericForm } from "../GenericForm/GenericForm"

function CreateForm(props) {
  const { state, setByKey, setValue } = useInput({})
  const { schema, itemAction, closeModal, title } = props

  // useEffect(() => {
  //   setValue(schema)
  // }, [schema, setValue])

  // const isDisabled = (key) => {
  //   return key.toLocaleLowerCase() === 'id' ? true : false
  // }

  // const inputType = (key) => {
  //   let type = 'text'
  //   const nums = ['price', 'sum', 'number', 'rate', 'client', 'product', 'avg_rate', 'amount', 'producer']
  //   const dates = ['order_date']
  //   if (nums.indexOf(key.toLocaleLowerCase()) !== -1) {
  //     type = 'number'
  //   }
  //   if (dates.indexOf(key.toLocaleLowerCase()) !== -1) {
  //     type = 'date'
  //   }
  //   return type
  // }

  // const GenerateForm = () => {
  //   let forms = []
  //   for (const key in schema) {
  //     if (key.toLocaleLowerCase() === 'status') {
  //       const statuses = ['in_progress', 'rejected', 'success']
  //       forms.push(
  //         <select
  //           style={{ padding: "0.8em" }}
  //           key={key}
  //           placeholder={toUpper(key)}
  //           value={state[key]}
  //           onChange={e => setByKey(e, key)}
  //         >
  //           {statuses.map(status => <option style={{ textAlign: "left" }} value={status}>{status}</option>)}
  //         </select>
  //       )
  //       continue
  //     }
  //     forms.push(
  //       <Input
  //         type={inputType(key)}
  //         style={{ padding: "0.8em" }}
  //         key={key}
  //         placeholder={toUpper(key)}
  //         disabled={isDisabled(key)}
  //         onChange={e => setByKey(e, key)}
  //         value={state[key]}
  //       />
  //     )
  //   }
  //   return forms
  // }

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
        {/* {GenerateForm()} */}
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
