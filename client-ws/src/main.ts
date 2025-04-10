import { WebSocket } from "ws"
import { thisData } from "./dummy/file"
const url = 'ws://localhost:81/device'

const connect = (address: string) => {
    let ws = new WebSocket(address)
    let count = 0

    ws.on('open', (client: WebSocket) => {
        console.log('count send : ', count)
        autoSend(ws)
    })

    ws.on('message', (data: Buffer) => {
        console.log('server return : ', data.toString())
        console.log('count return : ', count)
        count += 1
    })

    ws.on('error', (code: number, reason: any) => {
        console.log('error code ', code)
        console.log('text', reason)
        ws.close()
    })

    ws.on('close', () => {
        setTimeout(() => {
            connect(url)
        }, 5000);
    })

    const autoSend = (ws: WebSocket | null) => {
        if (ws !== null && ws.readyState === ws.OPEN) {
            const autoTime = setInterval(() => {
                if (ws.readyState === ws.OPEN) {
                    console.log('load count : ', count)
                    if (count === thisData.length - 1) count = 0
                    const value = {
                        event: 'events',
                        data: thisData[count]
                    }
                    ws.send(JSON.stringify(value))
                }
            }, 10000)
            return () => autoTime
        }
    }

    return ws
}

connect(url)

