import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { DataWsJson } from "./ProviderWebsocket"

const HookWebsocket = (url: string) => {

    const [message, setMessage] = useAtom<InternetData[]>(DataWsJson)
    const [nowData, setNowData] = useState<InternetData | null>(null)

    const { readyState, lastJsonMessage } = useWebSocket(url, {
        shouldReconnect: (e) => true
    })

    useEffect(() => {
        if (message.length > 10) {
            setMessage((prev) => [...prev.slice(1)])
        }
    }, [message])

    useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            if (lastJsonMessage !== null) {
                const value = lastJsonMessage as InternetData
                // setMessage((prev) => [...prev, value])
                setMessage([...message, value])
                setNowData(value)
            }
        }
    }, [lastJsonMessage, readyState])

    return { message, readyState, nowData }
}

export default HookWebsocket