import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function TableHeader(props) {
  const { changeModalShow, entitySchema, clearForm, findMatching, selectState, selectSetValue, getAmount, tableTitle } = props

  return (
    <div style={{ width: "100%", alignItems: "right" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Typography component="h1" variant="h6" color="inherit" noWrap style={{ marginBottom: "10px" }}>
          {tableTitle}
        </Typography>
        <div>
          {getAmount &&
            <Button disableElevation onClick={getAmount}>
              Get amount <AttachMoneyIcon fontSize="large" style={{ color: "yellow", marginLeft: "5px" }} />
            </Button>
          }
          <Button disableElevation onClick={clearForm}>
            Clear <CloseIcon fontSize="large" style={{ color: "orange", marginLeft: "5px" }} />
          </Button>
          <Button disableElevation onClick={findMatching}>
            Find <SearchIcon fontSize="large" style={{ color: "#2196f3", marginLeft: "5px" }} />
          </Button>
          <Button disableElevation onClick={() => changeModalShow(true, 'create', entitySchema)}>
            Add <AddCircleOutlineIcon style={{ color: "rgb(29 197 29)", marginLeft: "7px" }} fontSize="large" />
          </Button>
        </div>
      </div>
      {selectState &&
        <div style={{ textAlign: "right" }}>
          {!Object.keys(selectState).length &&
            <span style={{ marginRight: "-130px", color: "#a4a3a3", fontSize: "16px" }}>Sort by booking</span>
          }
          <Select
            value={selectState}
            onChange={selectSetValue}
            style={{ margin: "10px", width: "200px" }}
          >
            <MenuItem value={'1-5'}>1-5 bookings</MenuItem>
            <MenuItem value={'5-10'}>5-10 bookings</MenuItem>
            <MenuItem value={'rejected'}>At least 1 reject</MenuItem>
          </Select>
        </div>
      }
    </div>
  )
}

export default TableHeader
