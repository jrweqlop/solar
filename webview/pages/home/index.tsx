import { useAtom } from 'jotai'
import HookWebsocket from '../../src/server/HookWebsocket'
import { DataWsJson } from '../../src/server/ProviderWebsocket'
import ListView from '../../src/modules/ListView'
import ViewDataAllMpptSolarCharger from '../../src/modules/ViewDataAllMpptSolarCharger'
import Container from '@mui/material/Container'
import TimeClock from '../../src/shared/TimeClock'
import ViewDataAllBCU from '../../src/modules/ViewDataAllBCU'

const Index = () => {

    const [thidData] = useAtom<InternetData[]>(DataWsJson)

    const { readyState, nowData } = HookWebsocket('ws://localhost:81/device')

    return (
        <>
            <Container>
                <TimeClock />
                {/* {readyState} */}
                {/* {JSON.stringify(thidData)} */}
                {nowData !== null && (
                    <>
                        {/* <ListView data={nowData} /> */}
                        <ViewDataAllBCU data={nowData['DATA_ALL_BCU']} />
                        {/* <ViewDataAllMpptSolarCharger data={nowData['DATA_ALL_MPPT_SOLAR_CHARGER']} /> */}
                    </>
                )}
            </Container>

        </>
    )
}

export default Index
