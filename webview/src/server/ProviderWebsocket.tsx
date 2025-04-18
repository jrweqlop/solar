import { atom } from 'jotai'
import React from 'react'
import HookWebsocket from './HookWebsocket'

interface ProviderWebsocketProps {
    children: React.ReactNode
}


export const DataWsJson = atom<InternetData[]>([])
export const NowDataWsJson = atom<InternetData | null>(null)

const wsUrl = process.env.NEXT_PUBLIC_WS_CONNECT || `ws://localhost:81/hardware`

const ProviderWebsocket: React.FC<ProviderWebsocketProps> = ({ children }) => {
    const { readyState, nowData } = HookWebsocket(wsUrl)
    return (
        <>
            {children}
        </>
    )
}

export default ProviderWebsocket