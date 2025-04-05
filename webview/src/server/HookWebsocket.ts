import { useAtom } from "jotai"
import { useEffect } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { DataWsJson, NowDataWsJson } from "./ProviderWebsocket"

const HookWebsocket = (url: string) => {

    const [message, setMessage] = useAtom<InternetData[]>(DataWsJson)
    const [nowData, setNowData] = useAtom<InternetData | null>(NowDataWsJson)

    const { readyState, lastJsonMessage } = useWebSocket(url, {
        shouldReconnect: (e) => true
    })

    useEffect(() => {
        if (message.length > 10) {
            setMessage((prev) => [...prev.slice(1)])
        }
    }, [message])

    const customHookWebsocket = (callback: (item: InternetData) => void) => {
        useEffect(() => {
            if (readyState === ReadyState.OPEN) {
                if (lastJsonMessage !== null) {
                    const value = lastJsonMessage as InternetData
                    callback(value)
                }
            }
        }, [readyState, lastJsonMessage])
    }

    customHookWebsocket((data) => {
        setNowData(data)
        setMessage((e) => [...e, data])
    })

    return { message, readyState, nowData }
}

export default HookWebsocket