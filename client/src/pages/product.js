import React, { useContext, useEffect, useState } from 'react'

import DataTable from "../components/Table/Table"
import { SmallContext } from "../context/state"
import { useFetchCtx } from "../hooks/useFetchCtx"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"
import ModalPortal from "../components/Modal/ModalPortal"
import FormManager from "../components/ModalForm/FormManager"
import TableHeader from "../components/Table/TableHeader"
import { GenericForm } from "../components/GenericForm/GenericForm"
import { useInput } from '../hooks/useInput'
import { purifySchema, getConditions } from "../utils"

const productOptions = [
  {
    title: "Not purchased",
    value: "$ne"
  },
  {
    title: "Purchased",
    value: "$in"
  },
  {
    title: "Sort by price",
    value: "avg_rate"
  }
]

function Product() {
  const { changeModalShow, modalType, data, isLoading } = useContext(SmallContext)
  const { state, setByKey, setValue } = useInput({})
  const select = useInput({})
  const [findConditions, setConditions] = useState({})
  const [entitySchema, setSchema] = useState("")

  useEffect(() => {
    const schema = data.length && data[0] ? data[0] : []
    setSchema(schema)
  }, [data])

  useFetchCtx(Api.product.get, findConditions)

  const removeAsync = async (id) => {
    const { url, options } = Api.product.delete(id)
    await fetch(url, options)
  }

  const createAsync = async (item) => {
    delete item.id
    delete item.avg_rate
    const { url, options } = Api.product.create(item)
    const res = await fetch(url, options)
    const created = await res.json()
    return created
  }

  const updateAync = async (item) => {
    delete item.total
    delete item.avg_rate
    const { url, options } = Api.product.update(item.id, item)
    await fetch(url, options)
  }

  const findMatching = () => {
    const conditions = getConditions({ select, state, entity: 'product' })
    setConditions(conditions)
  }

  const clearForm = () => {
    setValue(purifySchema(entitySchema))
    setConditions({ body: "" })
    select.setValue({})
  }

  return (
    <React.Fragment>
      <TableHeader
        changeModalShow={changeModalShow}
        entitySchema={entitySchema}
        clearForm={clearForm}
        findMatching={findMatching}
        selectState={select.state}
        selectSetValue={select.setState}
        tableTitle="Product table"
        selectTitle="Sort by purchases"
        selectOptions={productOptions}
        selectRight="-148px"
      />
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {!isLoading &&
            <GenericForm
              schema={entitySchema}
              state={state}
              setByKey={setByKey}
              setValue={setValue}
              search={true}
            />}
        </div>
        <div style={{ textAlign: "right", margin: "1em 1em" }}>
        </div>
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
      {(data && data.length === 0) && <h1>Table is empty</h1>}
      {data &&
        <DataTable
          rows={data}
          columns={generateColumns(data)}
          changeModalShow={changeModalShow}
        />
      }
    </React.Fragment>
  )
}

export default Product
