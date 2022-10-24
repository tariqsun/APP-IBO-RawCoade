import React from 'react'
import ReactTable from './ReactTable';

function Table({title, columns, data}) {
  return (
    <ReactTable columns={columns} data={data} />
  )
}

export default Table