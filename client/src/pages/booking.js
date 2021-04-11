import React, { useContext } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DataTable from "../components/Table/Table"
import { SmallContext } from "../context/state"
import { useFetchCtx } from "../hooks/useFetchCtx"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"
import ModalPortal from "../components/Modal/ModalPortal"
import FormManager from "../components/ModalForm/FormManager"

function Booking() {
  // const { response, isLoading } = useFetch(Api.booking.get)
  const { changeModalShow, modalType } = useContext(SmallContext)
  const { data, isLoading } = useFetchCtx(Api.booking.get)
  const entitySchema = data.length && data[0] ? data[0] : []

  const removeAsync = async (id) => {
    const { url, options } = Api.booking.delete(id)
    await fetch(url, options)
  }
  const createAsync = async (item) => {
    if (item.hasOwnProperty('id')) {
      delete item.id
    }
    const { url, options } = Api.booking.create(item)
    const res = await fetch(url, options)
    const created = await res.json()
    return created
  }
  const updateAync = async (item) => {
    const { url, options } = Api.booking.update(item.id, item)
    await fetch(url, options)
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Typography component="h1" variant="h6" color="inherit" noWrap style={{ marginBottom: "10px" }}>
          Booking table
        </Typography>
        <Button disableElevation onClick={() => changeModalShow(true, 'create', entitySchema)}>
          <AddCircleOutlineIcon style={{ color: "#2ce62c" }} fontSize="large" />
        </Button>
      </div>
      {modalType &&
        <ModalPortal>
          <FormManager
            removeAsync={removeAsync}
            createAsync={createAsync}
            updateAync={updateAync}
          />
        </ModalPortal>
      }
      {isLoading && <Loader />}
      {data &&
        <DataTable
          rows={data}
          columns={generateColumns(data)}
          changeModalShow={changeModalShow}
        />}
    </React.Fragment>
  )
}

export default Booking
