import { atom } from 'jotai'
import React from 'react'
import HookWebsocket from './HookWebsocket'

interface ProviderWebsocketProps {
    children: React.ReactNode
}

export const DataWsJson = atom<InternetData[]>([])
export const NowDataWsJson = atom<InternetData | null>(null)

const ProviderWebsocket: React.FC<ProviderWebsocketProps> = ({ children }) => {
    const { readyState, nowData } = HookWebsocket('ws://localhost:81/device')

    return (
        <>
            {children}
        </>
    )
}

export default ProviderWebsocket