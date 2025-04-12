import ProviderContainer from '../../src/components/Provider/ProviderContainer'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewDataMonitorFromGD32 from '../../src/modules/DataMonitorFromGD32/ViewDataMonitorFromGD32'

const Monitorfromgd32 = () => {
    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    if (nowData !== null) {

        return (
            <>
                <ProviderContainer path=''>
                    <>

                        <ViewDataMonitorFromGD32 data={nowData['monitorFrom_GD32']} />
                    </>
                </ProviderContainer>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Monitorfromgd32