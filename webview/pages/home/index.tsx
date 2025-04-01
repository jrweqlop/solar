import { useAtom } from 'jotai'
import HookWebsocket from '../../src/server/HookWebsocket'
import { DataWsJson } from '../../src/server/ProviderWebsocket'
import ListView from '../../src/modules/ListView'

const Index = () => {

    const [thidData] = useAtom<InternetData[]>(DataWsJson)

    const { readyState, nowData } = HookWebsocket('ws://localhost:81/device')

    return (
        <>
            {/* {readyState} */}
            {/* {JSON.stringify(thidData)} */}
            {nowData !== null && (
                <ListView data={nowData} />
            )}
        </>
    )
}

export default Index