import { join } from "path";
import { clearInterval } from "timers";
import { WebSocket } from "ws";
import { thisData } from "./dummy/file";

// const WebSocket = require('ws')
const ws = new WebSocket('ws://192.168.1.118:81/device')
// const ws = new WebSocket('ws://192.168.1.121:7755/device')
let count = 0
let connect = false

ws.on('open', () => {
    connect = true
    // ws.send(JSON.stringify({
    //     event: 'events',
    //     data: 'test',
    // }))
    // const data = JSON.stringify({
    //     event: 'message',
    //     data: `{"Volt": "220.2", "Current": "15.8", "Power": "2.2"}`
    // })
    // const data = `{Volt: "220.2", Current: "15.8", Power: "2.2" }`
    // console.log(data)
    // ws.send(data)
    autoRun()
})
const autoConnect = () => {
    if (connect === false) {
        ws.CONNECTING
    }
}

const autoRun = () => {
    const autoSend = setInterval(() => {
        if (count === thisData.length - 1) count = 0
        count += 1
        console.log('sending :', count)
        const data = JSON.stringify({
            // event: 'message',
            event: 'events',
            data: thisData[count]
        })
        ws.send(data)
    }, 10000)
    return () => clearInterval(autoSend)
}

ws.on('message', (data: Buffer) => {
    console.log('Received message:', data.toString());
});

ws.on('error', () => {
    console.log('fail connect')
})

ws.on('close', () => {
    console.log('Connection closed');
    connect = false
});

autoConnect()