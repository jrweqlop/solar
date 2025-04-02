import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const TimeClock = () => {

  const [nowTime, setNowTime] = useState<string>('')

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
      {nowTime}
    </>
  )
}

export default TimeClock