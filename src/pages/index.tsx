import React from 'react'
import  PokeApi from './poke'
import Hello from 'components/hello1'


export default function() {
  return (
    <div>
      <PokeApi historyLength={4}/>
      <Hello />
    </div>
  )
}
