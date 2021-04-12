import React, { useEffect } from 'react'
import Input from '@material-ui/core/Input';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';

// import { useInput } from '../../hooks/useInput'
import { toUpper } from "../Table/TableUtils"
import { purifySchema } from "../../utils"

export const GenericForm = (props) => {
  // const { state, setByKey, setValue } = useInput({})
  const { schema, state, setByKey, setValue, search } = props
  const selectStyles = {
    padding: "0.8em",
    margin: "1em 1em 0 0",
    background: ' #424242',
    border: 'none',
    color: "white",
    borderBottom: "1px solid",
    fontSize: "16px",
    outline: "none"
  }

  useEffect(() => {
    if (search) {
      setValue(purifySchema(schema))
    } else {
      setValue(schema)
    }
  }, [schema, setValue, search])

  const isDisabled = (key) => {
    return !search && (key.toLocaleLowerCase() === 'id' ? true : false)
  }

  const inputType = (key) => {
    let type = 'text'
    const nums = ['id', 'price', 'sum', 'number', 'rate', 'client', 'product', 'avg_rate', 'amount', 'producer']
    const dates = ['order_date']
    if (nums.indexOf(key.toLocaleLowerCase()) !== -1) {
      type = 'number'
    }
    if (dates.indexOf(key.toLocaleLowerCase()) !== -1) {
      type = 'date'
    }
    return type
  }

  let forms = []
  for (const key in schema) {
    if (['status', 'total', 'expensessum'].indexOf(key.toLocaleLowerCase()) !== -1) {
      continue
    }
    if (key.toLocaleLowerCase() === 'status') {
      const statuses = ['in_progress', 'rejected', 'success']
      forms.push(
        <select
          style={selectStyles}
          key={key}
          placeholder={toUpper(key)}
          value={state[key]}
          onChange={e => setByKey(e, key)}
        >
          {statuses.map(status => <option style={{ textAlign: "left" }} value={status}>{status}</option>)}
        </select>
      )
      continue
    }
    forms.push(
      <Input
        type={inputType(key)}
        style={{ padding: "0.8em", margin: "0 1em 0 0" }}
        key={key}
        placeholder={toUpper(key)}
        disabled={isDisabled(key)}
        onChange={e => setByKey(e, key)}
        value={state[key]}
      />
    )
  }
  return forms
}
