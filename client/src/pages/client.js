import React, { useContext, useEffect, useState } from 'react'
import Input from '@material-ui/core/Input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import CheckIcon from '@material-ui/icons/Check';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

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
import { onlyExisting, purifySchema } from "../utils"

function Client() {
  const { changeModalShow, modalType, data, isLoading } = useContext(SmallContext)
  const { state, setByKey, setValue } = useInput({})
  const [findConditions, setConditions] = useState({})
  const [entitySchema, setSchema] = useState("")

  useEffect(() => {
    const schema = data.length && data[0] ? data[0] : []
    setSchema(schema)
    console.log("entitySchema", entitySchema)
  }, [data])

  useFetchCtx(Api.client.get, findConditions)

  const removeAsync = async (id) => {
    const { url, options } = Api.client.delete(id)
    await fetch(url, options)
  }
  const createAsync = async (item) => {
    if (item.hasOwnProperty('id')) {
      delete item.id
    }
    const { url, options } = Api.client.create(item)
    const res = await fetch(url, options)
    const created = await res.json()
    return created
  }
  const updateAync = async (item) => {
    const { url, options } = Api.client.update(item.id, item)
    await fetch(url, options)
  }

  const findMatching = () => {
    const conditions = {
      body: JSON.stringify({ where: onlyExisting(state) })
    }
    setConditions(conditions)
  }

  const clearForm = () => {
    setValue(purifySchema(entitySchema))
    setConditions({ body: "" })
  }

  return (
    <React.Fragment>
      <TableHeader changeModalShow={changeModalShow} entitySchema={entitySchema} clearForm={clearForm} findMatching={findMatching} />
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {!isLoading && <GenericForm
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

export default Client
