

import React, { useContext, useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function TableHeader(props) {
  const { changeModalShow, entitySchema, clearForm, findMatching } = props
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      <Typography component="h1" variant="h6" color="inherit" noWrap style={{ marginBottom: "10px" }}>
        Client table
        </Typography>
      <div>
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
  )
}

export default TableHeader
