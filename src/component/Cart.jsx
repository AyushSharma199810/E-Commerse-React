import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'

export default function Cart() {
  return (
    <div>
         {console.log(store.getState())}
    </div>
  )
}
