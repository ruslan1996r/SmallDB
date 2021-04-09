import React from 'react'

import DataTable from "../components/Table/Table"
import { useFetch } from "../hooks/useFetch"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"

function Category() {
  const { response, isLoading } = useFetch(Api.category.get)
  return (
    <React.Fragment>
      CATEGORY TABLE
      {isLoading && <Loader />}
      {response && <DataTable columns={generateColumns(response)} rows={response} />}
    </React.Fragment>
  )
}

export default Category
