import React, { useContext, useEffect, useState } from 'react'

import { SmallContext } from "../../context/state"
import CreateForm from "./CreateForm"
import DeleteForm from "./DeleteForm"

function FormManager(props) {
  const { removeAsync, createAsync, updateAync } = props
  const { item, modalType, changeModalShow, deleteData, createData, updateData } = useContext(SmallContext)
  const [createSchema, setCreateSchema] = useState({})
  const [updateSchema, setUpdateSchema] = useState({})

  useEffect(() => {
    let createSchema = {}
    let updateSchema = {}
    for (const key in item) {
      createSchema[key] = ""
      updateSchema[key] = key.toLocaleLowerCase() === 'order_date' ? item[key].substr(0, 10) : item[key]
    }
    setCreateSchema(createSchema)
    setUpdateSchema(updateSchema)
  }, [item])

  const deleteItem = async () => {
    deleteData(item.id)
    changeModalShow(false)
    await removeAsync(item.id)
  }
  const createItem = async (item) => {
    const created = await createAsync(item)
    createData(created)
    changeModalShow(false)
  }
  const updateItem = async (item) => {
    updateData(item.id, item)
    changeModalShow(false)
    await updateAync(item)
  }

  switch (modalType) {
    case 'create':
      return <CreateForm
        title="Update item"
        schema={createSchema}
        itemAction={createItem}
        closeModal={() => changeModalShow(false)}
      />
    case 'delete':
      return <DeleteForm
        title={'Are you sure you want to delete the item ?'}
        deleteData={() => deleteItem()}
        closeModal={() => changeModalShow(false)}
      />
    case 'edit':
      return <CreateForm
        title="Update item"
        schema={updateSchema}
        itemAction={updateItem}
        closeModal={() => changeModalShow(false)}
      />
    default:
      break;
  }
}

export default FormManager
