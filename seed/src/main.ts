import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

function startRead() {
    const dataReadFile = readFileSync(join(process.cwd(), './prisma/schema.prisma'), 'utf8')

    writeFileSync('../solarbackend/prisma/schema.prisma', dataReadFile)
    writeFileSync('../client-ws/prisma/schema.prisma', dataReadFile)
    console.log(dataReadFile)
}

console.log('test')

startRead()