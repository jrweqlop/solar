import { WebSocket } from "ws"
import { thisData } from "../dummy/file";

export const CreateWebsocketClientConnect = (url: string, maxReconnectAttempts: 5) => {
    let socket: WebSocket | null = null;
    let reconnectAttempts = 0; // ตัวนับจำนวนการ reconnect
    let backoffTime = 1000; // เวลาเริ่มต้นสำหรับ backoff (1 วินาที)

    let count = 0

    // ฟังก์ชันเชื่อมต่อ WebSocket
    function connect() {
        socket = new WebSocket(url);

        // เมื่อ WebSocket เชื่อมต่อสำเร็จ
        socket.on('open', () => {
            console.log('Connected to WebSocket server');
            reconnectAttempts = 0; // รีเซ็ตการนับเมื่อเชื่อมต่อสำเร็จ
            backoffTime = 1000; // รีเซ็ตเวลา backoff
            // ส่งข้อมูลหรือ subscribe event ที่ต้องการ
            // socket?.send(JSON.stringify({ event: 'foo', data: 'Hello from client' }));
            loadAuto()
        });

        // เมื่อมีข้อความใหม่มาจาก server
        socket.on('message', (data) => {
            console.log('Received message:', data.toString());
        });

        // เมื่อ WebSocket ปิดการเชื่อมต่อ (เช่น จากการหลุดหรือปิดเอง)
        socket.on('close', (code, reason) => {
            console.log(`WebSocket closed. Code: ${code}, Reason: ${reason}`);
            if (reconnectAttempts < maxReconnectAttempts) {
                reconnect(); // พยายามเชื่อมต่อใหม่
            } else {
                console.log('Max reconnect attempts reached. Giving up.');
            }
        });

        // เมื่อเกิดข้อผิดพลาดใน WebSocket
        socket.on('error', (err) => {
            console.error('WebSocket Error:', err);
            socket?.close(); // ปิดการเชื่อมต่อเมื่อเกิดข้อผิดพลาด
        });
    }

    // ฟังก์ชันการ reconnect เมื่อหลุด
    function reconnect() {
        console.log(`Attempting to reconnect... (Attempt #${reconnectAttempts + 1})`);

        // เพิ่มระยะเวลาระหว่างการ reconnect ด้วย exponential backoff
        setTimeout(() => {
            reconnectAttempts++; // เพิ่มจำนวนครั้งที่พยายาม reconnect
            backoffTime *= 2; // เพิ่มระยะเวลาระหว่างการ reconnect
            connect(); // พยายามเชื่อมต่อใหม่
        }, backoffTime);
    }

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
            socket?.send(data)
            // if (ws !== null)
            // else console.log('ws is null')
        }, 10000)
        return () => clearInterval(autoSend)
    }

    // เริ่มต้นเชื่อมต่อครั้งแรก
    connect();
}