import ProviderContainer from '../../src/components/Provider/ProviderContainer'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewFlagChildControlIsDown from '../../src/modules/DataFlagChildControlIsDown/ViewFlagChildControlIsDown'

const FlagChildControlIsDown = () => {
    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderContainer path=''>
                <>
                    <ViewFlagChildControlIsDown data={nowData ? nowData['flagChildControlIsDown'] : null} />
                </>
            </ProviderContainer>
        </>
    )
}

export default FlagChildControlIsDown