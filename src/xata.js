// Generated by Xata Codegen 0.28.0. Please do not edit.
import { buildClient } from '@xata.io/client'
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [{ name: 'my-flag-name', columns: [] }]
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient()
const defaultOptions = {
  databaseURL: 'https://Rishi-Raj-Jain-s-workspace-80514q.us-east-1.xata.sh/db/feature-flags-with-astro',
}
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables)
  }
}
let instance = undefined
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance
  instance = new XataClient()
  return instance
}