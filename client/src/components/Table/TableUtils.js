export function toUpper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateColumns(data) {
  let columns = []
  if (data && data.length && data[0]) {
    let keys = Object.keys(data[0])
    for (const key in keys) {
      let col = {
        id: keys[key],
        label: toUpper(keys[key]),
        minWidth: 110,
        align: "left",
      }
      if (typeof key === 'number') {
        col['format'] = (val) => val.toLocaleString('en-US')
      }
      columns.push(col)
    }
    columns.push({
      id: "actions",
      label: "Actions", minWidth: 150,
      align: "center"
    })
  }
  return columns
}