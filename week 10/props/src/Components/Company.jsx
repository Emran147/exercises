import React from 'react'
import SubCompany from './SubCompany'

export default function Company({name}) {
  return (
    <div>
        <SubCompany name={name}/> 
    </div>
  )
}
