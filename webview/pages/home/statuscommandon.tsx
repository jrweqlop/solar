import ProviderContainer from '../../src/components/Provider/ProviderContainer'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewStatusCommandOn from '../../src/modules/DataStatusCommandOn/ViewStatusCommandOn'

const StatusCommandOn = () => {
    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    if (nowData !== null) {

        return (
            <>
                <ProviderContainer path=''>
                    <>
                        <ViewStatusCommandOn data={nowData['statusCommandOn']} />
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

export default StatusCommandOn