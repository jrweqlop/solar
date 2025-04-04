import { useAtom } from 'jotai'
import HookWebsocket from '../../src/server/HookWebsocket'
import { DataWsJson } from '../../src/server/ProviderWebsocket'
import ListView from '../../src/modules/ListView'
import ViewDataAllMpptSolarCharger from '../../src/modules/ViewDataAllMpptSolarCharger'
import Container from '@mui/material/Container'
import TimeClock from '../../src/shared/TimeClock'
import ViewDataAllBCU from '../../src/modules/ViewDataAllBCU'
import ProviderMain from '../../src/components/Provider/ProviderMain'
import { useEffect } from 'react'

const urlWs = process.env.NEXT_PUBLIC_WS_CONNECT || 'ws://localhost:7755/device'

const Index = () => {

    const [thidData] = useAtom<InternetData[]>(DataWsJson)

    // const url = `ws://${urlWs}:81/device`

    const { readyState, nowData } = HookWebsocket(urlWs)

    useEffect(() => {
        console.log(urlWs)
    }, [])

    return (
        <>
            <ProviderMain>
                {nowData !== null && (
                    <>
                        {/* <ListView data={nowData} /> */}
                        <ViewDataAllBCU data={nowData['DATA_ALL_BCU']} />
                        {/* <ViewDataAllMpptSolarCharger data={nowData['DATA_ALL_MPPT_SOLAR_CHARGER']} /> */}
                    </>
                )}
            </ProviderMain>
        </>
    )
}

export default Index
