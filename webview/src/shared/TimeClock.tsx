import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import { atom, useAtom } from 'jotai'
import React, { useEffect } from 'react'

export const nowTime = atom<string | null>(null)

interface TimeCLockProps {
  children: React.ReactNode
}

const TimeClock: React.FC<TimeCLockProps> = ({ children }) => {

  const [lastTime, setLastTime] = useAtom<string | null>(nowTime)

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
    setLastTime(data)
  })

  return (
    <>
      {children}
    </>
  )

}

export default TimeClock