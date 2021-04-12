import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText'

// import { selectValToSql } from "../../utils"
// import { useSelectStyles } from "../../styles/makeStyles"

function TableHeader(props) {
  const { changeModalShow, entitySchema, clearForm, findMatching, selectState, selectSetValue, getAmount } = props
  // const selectStyles = useSelectStyles()

  // const whereConditions = () => {
  //   return 
  // }
  // const changeSelect = (e) => {
  //   // console.log(selectValToSql(e.target.value))
  //   selectSetValue(selectValToSql(e.target.value))
  //   console.log("selectState", selectState)
  //   // console.log("selectState", selectValToSql(e.target.value))
  //   // findMatching(selectValToSql(e.target.value))
  // }
  return (
    <div style={{ width: "100%", alignItems: "right" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Typography component="h1" variant="h6" color="inherit" noWrap style={{ marginBottom: "10px" }}>
          Client table
        </Typography>
        <div>
          {/* getAmount */}
          {getAmount && <Button disableElevation onClick={getAmount}>
            Get amount
          <AttachMoneyIcon fontSize="large" style={{ color: "yellow", marginLeft: "5px" }} />
          </Button>}
          <Button disableElevation onClick={clearForm}>
            Clear
          <CloseIcon fontSize="large" style={{ color: "orange", marginLeft: "5px" }} />
          </Button>
          <Button disableElevation onClick={findMatching}>
            Find
            <SearchIcon fontSize="large" style={{ color: "#2196f3", marginLeft: "5px" }} />
          </Button>
          <Button disableElevation onClick={() => changeModalShow(true, 'create', entitySchema)}>
            Add <AddCircleOutlineIcon style={{ color: "rgb(29 197 29)", marginLeft: "7px" }} fontSize="large" />
          </Button>
        </div>
      </div>
      {/* <div style={{ textAlign: "right" }}> */}
      {/* <span>Sort by booking</span> */}
      <div style={{ textAlign: "right" }}>
        {/* <FormControl className={selectStyles.formControl}> */}
        {/* <InputLabel htmlFor="select" style={{ marginLeft: "10px" }}>Sort by booking</InputLabel> */}
        {!Object.keys(selectState).length &&
          <span style={{ marginRight: "-130px", color: "#a4a3a3", fontSize: "16px" }}>Sort by booking</span>
        }
        <Select
          value={selectState}
          onChange={selectSetValue}
          style={{ margin: "10px", width: "200px" }}
        >
          {/* <MenuItem value="" aria-label="None">Sort by booking</MenuItem> */}
          <MenuItem value={'1-5'}>1-5 bookings</MenuItem>
          <MenuItem value={'5-10'}>5-10 bookings</MenuItem>
          <MenuItem value={'rejected'}>At least 1 reject</MenuItem>
        </Select>
        {/* <FormHelperText style={{ marginLeft: "10px", textAlign: "right" }}>Sort by booking</FormHelperText>
        </FormControl> */}
      </div>
      {/* </div> */}
    </div>
  )
}

export default TableHeader
