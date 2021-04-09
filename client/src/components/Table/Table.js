import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import Button from '@material-ui/core/Button';
import { TableActions } from "./TableActions"

import { useTableStyles } from "../../styles/makeStyles"

export default function DataTable(props) {
  const { columns, rows } = props
  const classes = useTableStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'actions' ?
                          <TableActions /> :
                          (column.format && typeof value === 'number' ? column.format(value) : value)
                        }
                        {/* <div>
                            <Button disableElevation>
                              <EditIcon style={{ color: "#3aa8ff" }} />
                            </Button>
                            <Button disableElevation>
                              <DeleteIcon style={{ color: "red" }} />
                            </Button>
                          </div> :
                          (column.format && typeof value === 'number' ? column.format(value) : value) */}
                        {/* } */}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
