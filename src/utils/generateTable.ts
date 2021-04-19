import fs from "fs"
import path from "path"

import PDFDocument from "./pdfkit-tables"
import { entityHeaders, fieldsToArray, toUpper } from './tableHelpers'

export async function generateTable(data: any[], tableName: string, title: string) {
  const doc = new PDFDocument({
    bufferPages: true,
    size: 'LEGAL',
    info: {
      Title: `${tableName} report`,
      Author: 'Hitler',
    }
  })
  const reportPath = path.join(__dirname, `../reports/${tableName}.pdf`)
  const stream = fs.createWriteStream(reportPath)
  doc.pipe(stream);

  doc
    .fillColor("#444444")
    .fontSize(20)
    .text(`${toUpper(tableName)} report`, 100, 50, { align: "center" })
    .fontSize(11)
    .text(title, 100, 85, { align: "center" })
    .moveDown();

  const table = {
    headers: entityHeaders(data),
    rows: fieldsToArray(data)
  }
  doc.moveDown()
    .table(table, 10, 125, { width: 590 })
    .moveDown()
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(reportPath))
  })
}