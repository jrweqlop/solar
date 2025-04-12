import ProviderContainer from '../../src/components/Provider/ProviderContainer'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewStatusCommandOn from '../../src/modules/DataStatusCommandOn/ViewStatusCommandOn'

const StatusCommandOn = () => {
    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <ProviderContainer path=''>
            <>
                <ViewStatusCommandOn data={nowData ? nowData['statusCommandOn'] : null} />
            </>
        </ProviderContainer>
    )
}

export default StatusCommandOn