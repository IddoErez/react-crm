import React from 'react'
import { observer, inject } from 'mobx-react'
import countries from '../Countries.js'

console.log(countries)

const Actions = inject("ClientStore")(observer((props)=> { 
    // console.log(props.ClientStore.clients[0])
      return (
        <div>
           Actions
        </div>
    )
}))
export default Actions;