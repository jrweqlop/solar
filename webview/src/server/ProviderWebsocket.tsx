import { atom, useAtom } from 'jotai'
import React, { ProviderProps, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

interface ProviderWebsocketProps {
    children: React.ReactNode
}

export const DataWsJson = atom<object[]>([])

const ProviderWebsocket: React.FC<ProviderWebsocketProps> = ({ children }) => {


    const urlConnect = 'ws://localhost:81/device'
    const [url, setUrl] = useState<string | null>(null)
    const [message, setMessage] = useAtom(DataWsJson)

    const { readyState, lastJsonMessage } = useWebSocket(url, {
        onOpen: () => console.log('connect ws'),
        onClose: () => console.log('disconnect ws'),
        shouldReconnect: (cliseEvent) => true,
    })

    useEffect(() => {
        if (url === null) {
            setUrl(urlConnect)
        } else {
            if (lastJsonMessage) {
                const value = lastJsonMessage
                setMessage((e) => [...e, value])
            }
        }
    }, [lastJsonMessage])

    return (
        <>
            {children}
        </>
    )
}

export default ProviderWebsocket