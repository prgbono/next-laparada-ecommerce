export const round2 = (num: number): number => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

// Convert mongo doc into a javascript object
export const convertDocToObj = (doc: any) => {
  doc._id = doc._id.toString()
  return doc
}
