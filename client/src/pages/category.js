import React, { useContext, useEffect, useState } from 'react'

import DataTable from "../components/Table/Table"
import { Api } from "../Api"
import { generateColumns } from "../components/Table/TableUtils"
import { Loader } from "../components/Loader/Loader"
import { SmallContext } from "../context/state"
import { useFetchCtx } from "../hooks/useFetchCtx"
import ModalPortal from "../components/Modal/ModalPortal"
import FormManager from "../components/ModalForm/FormManager"
import TableHeader from "../components/Table/TableHeader"
import { GenericForm } from "../components/GenericForm/GenericForm"
import { useInput } from '../hooks/useInput'
import { purifySchema, getConditions } from "../utils"

function Category() {
  const { changeModalShow, modalType, data, isLoading } = useContext(SmallContext)
  const { state, setByKey, setValue } = useInput({})
  const [findConditions, setConditions] = useState({})
  const [entitySchema, setSchema] = useState("")

  useEffect(() => {
    const schema = data.length && data[0] ? data[0] : []
    setSchema(schema)
  }, [data])

  useFetchCtx(Api.category.get, findConditions)

  const findMatching = () => {
    const conditions = getConditions({ state })
    setConditions(conditions)
  }

  const clearForm = () => {
    setValue(purifySchema(entitySchema))
    setConditions({ body: "" })
  }

  const removeAsync = async (id) => {
    const { url, options } = Api.category.delete(id)
    await fetch(url, options)
  }

  const createAsync = async (item) => {
    delete item.id

    const { url, options } = Api.category.create(item)
    const res = await fetch(url, options)
    const created = await res.json()
    // if (created.status === 400) {
    //   setAlert(created.message)
    // }
    return created
  }
  const updateAync = async (item) => {
    const { url, options } = Api.category.update(item.id, item)
    await fetch(url, options)
  }

  return (
    <React.Fragment>
      <TableHeader
        changeModalShow={changeModalShow}
        entitySchema={entitySchema}
        clearForm={clearForm}
        findMatching={findMatching}
        //selectState={select.state}
        //selectSetValue={select.setState}
        //getAmount={getAmount}
        tableTitle="Category table"
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

export default Category
