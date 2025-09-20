import React from 'react'

function page({params}) {
  return (
    <h1>meat item {params.id} reviews {params.id1}</h1>
  )
}

export default page