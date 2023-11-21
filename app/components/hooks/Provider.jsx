'use client'
import React, { createContext, useContext, useState } from 'react'

const context=createContext('')
const Provider = ({children}) => {
    const [dark,setDark]=useState(false)
  return (
    <context.Provider value={{dark,setDark}}>
    {children}
    </context.Provider>
  )
}
export const useGlobalcontext=()=>useContext(context)
export default Provider