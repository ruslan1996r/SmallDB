import React from 'react'

import DataTable from "../components/Table/Table"
import { useFetch } from "../hooks/useFetch"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"

function Booking() {
  const { response, isLoading } = useFetch(Api.booking.get)

  return (
    <React.Fragment>
      BOOKING TABLE
      {isLoading && <Loader />}
      {response && <DataTable loading columns={generateColumns(response)} rows={response} />}
    </React.Fragment>
  )
}

export default Booking
