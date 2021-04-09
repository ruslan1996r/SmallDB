import React from 'react'

import DataTable from "../components/Table/Table"
import { useFetch } from "../hooks/useFetch"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"

function Product() {
  const { response, isLoading } = useFetch(Api.product.get)

  return (
    <React.Fragment>
      PRODUCT TABLE
      {isLoading && <Loader />}
      {response && <DataTable columns={generateColumns(response)} rows={response} />}
    </React.Fragment>
  )
}

export default Product
