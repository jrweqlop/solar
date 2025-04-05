import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const TimeClock = () => {

  const lastTime = dayjs().format('DD/MM/YYYY HH:mm:ss A')

  const [nowTime, setNowTime] = useState<string | null>(null)

  // useEffect(() => {
  //   const intervalTime = setInterval(() => {
  //     const value = dayjs().format('DD/MM/YYYY HH:mm:ss A')
  //     setNowTime(value)
  //   }, 1000)
  //   return () => clearInterval(intervalTime)
  // }, [])

  const loadTime = (callback: (value: string) => void) => {
    useEffect(() => {
      const value = setInterval(() => {
        const thisTime = dayjs().format('DD/MM/YYYY HH:mm:ss A')
        callback(thisTime)
      }, 1000)
      return () => clearInterval(value)
    }, [])
  }

  loadTime((data: string) => {
    setNowTime(data)
  })

  return (
    <>
      <Typography textAlign={'center'} pt={2}>
        {nowTime ? lastTime : nowTime}
      </Typography>
    </>
  )
}

export default TimeClock