export function entityHeaders(data: any[] | any): string[] {
  if (data.length === 0 || data.status === 400) return []
  if (data && data[0]) {
    return Object.keys(data[0]).map((key: string) => toUpper(key))// key.charAt(0).toUpperCase() + key.slice(1))
  }
  return []
}

export function fieldsToArray(data: any[] | any): any[] {
  if (data.length === 0 || data.status === 400) return []
  if (Array.isArray(data)) return data.map((el: any) => {
    return Object.values(el).map(v => v === null ? 0 : v)
  })
  return []
}

export function toUpper(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}