import { atom, useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

interface ProviderWebsocketProps {
    children: React.ReactNode
}

export const DataWsJson = atom<InternetData[]>([])

const ProviderWebsocket: React.FC<ProviderWebsocketProps> = ({ children }) => {

    // const urlConnect = `ws:/${process.env.NEXT_PUBLIC_WS_CONNECT}:81/device`
    // const [url, setUrl] = useState<string | null>(null)
    // const [message, setMessage] = useAtom(DataWsJson)

    // const { readyState, lastJsonMessage } = useWebSocket(url, {
    //     onOpen: () => console.log('connect ws'),
    //     onClose: () => console.log('disconnect ws'),
    //     shouldReconnect: (cliseEvent) => true,
    // })

    // useEffect(() => {
    //     if (url === null) {
    //         setUrl(urlConnect)
    //     } else {
    //         if (lastJsonMessage) {
    //             const value = lastJsonMessage as InternetData
    //             setMessage((e) => [...e, value])
    //         }
    //     }
    // }, [lastJsonMessage])

    return (
        <>
            {children}
        </>
    )
}

export default ProviderWebsocket