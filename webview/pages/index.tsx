'use client'
import React from 'react'
import PageIndex from '../src/components/PageIndex'
import { useRouter } from 'next/navigation'

const Index = () => {

  const router = useRouter()

  const changePage = () => {
    router.push('/home')
  }

  return (
    <>
      <PageIndex nextPage={changePage} />
    </>
  )
}

export default Index