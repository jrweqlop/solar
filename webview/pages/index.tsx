import Button from '@mui/material/Button'
import { useAtom } from 'jotai'
import React from 'react'
import { DataWsJson } from '../src/server/ProviderWebsocket'

const Index = () => {

  const [message] = useAtom(DataWsJson)

  const testOnClick = () => {
    console.log('test')
  }

  return (
    <>
      <Button onClick={testOnClick}>ทดสอบ</Button>
      {JSON.stringify(message)}
    </>
  )
}

export default Index