import React from 'react'

import DataTable from "../components/Table/Table"
import { useFetch } from "../hooks/useFetch"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"

function Producer() {
  const { response, isLoading } = useFetch(Api.producer.get)

  return (
    <React.Fragment>
      PRODUCER TABLE
      {isLoading && <Loader />}
      {response && <DataTable columns={generateColumns(response)} rows={response} />}
    </React.Fragment>
  )
}

export default Producer
