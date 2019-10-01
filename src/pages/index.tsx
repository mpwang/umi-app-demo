import React from 'react'
import  PokeApi from './poke'
import { Hello1 } from 'components/hello1'

export default function() {
  return (
    <div>
      <PokeApi historyLength={4}/>
      <Hello1 />
    </div>
  )
}
