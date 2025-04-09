import { join } from "path";
import { clearInterval } from "timers";
import { WebSocket } from "ws";
import { thisData } from "./dummy/file";

// const WebSocket = require('ws')
// const ws = new WebSocket('ws://192.168.1.121:7755/device')
// const ws = new WebSocket('ws://localhost:81/device')
let count = 0
let retryCount = 0;
const url = 'ws://localhost:81/device'

const StartConnect = () => {
    const ws = new WebSocket(url)

    ws.on('open', () => {
        loadAuto()

    })

    ws.on('error', () => {
        console.log('error connect')
        // console.log('check')
        ws.close(1012, 'Normal Closure')
        // ws.CLOSING
        // reconnect()
    })

    ws.on('message', (data: Buffer) => {
        console.log('receive data : ', data.toString())
    })

    ws.on('close', (code: number, reason: Buffer) => {
        console.log(code)
        console.log(reason.toString())
        function reconnectWithBackoff() {
            const delay = Math.min(1000 * Math.pow(2, retryCount), 10000); // max 10s
            setTimeout(() => {
                retryCount++;
                reconnect();
            }, delay);
        }
        // setTimeout(() => { reconnect() }, 1000);
        reconnectWithBackoff()
    })

    const loadAuto = () => {
        const autoSend = setInterval(() => {
            if (count === thisData.length - 1) count = 0
            count += 1
            console.log('sending :', count)
            const data = JSON.stringify({
                // event: 'message',
                event: 'events',
                data: thisData[count]
            })
            // console.log(thisData[count])
            // console.log(ws)
            ws.send(data)
            // if (ws !== null)
            // else console.log('ws is null')
        }, 10000)
        return () => clearInterval(autoSend)
    }
    return ws
}

function reconnect() {
    // console.log(`🔄 Attempting to reconnect in ${10000}s...`);
    const result = setInterval(() => {
        StartConnect()
    }, 10000)
    return () => clearInterval(result)
}

StartConnect()