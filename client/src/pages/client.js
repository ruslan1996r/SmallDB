import React, { useContext } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

import DataTable from "../components/Table/Table"
import Modal from '../components/Modal/Modal'
import { SmallContext } from "../context/state"
import { useFetch } from "../hooks/useFetch"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"

function Client() {
  const { showModal, changeModalShow } = useContext(SmallContext)
  const { response, isLoading } = useFetch(Api.client.get)

  console.log("showModal, changeModalShow", showModal, changeModalShow)

  return (
    <React.Fragment>
      CLIENT TABLE
      <Button disableElevation>
        <AddCircleOutlineIcon style={{ color: "#2ce62c" }} fontSize="large" />
      </Button>
      <Modal>
        <h1>test123</h1>
      </Modal>
      {isLoading && <Loader />}
      {response && <DataTable columns={generateColumns(response)} rows={response} />}
    </React.Fragment>
  )
}

export default Client
