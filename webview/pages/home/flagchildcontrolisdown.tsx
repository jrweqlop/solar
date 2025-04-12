import ProviderContainer from '../../src/components/Provider/ProviderContainer'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewFlagChildControlIsDown from '../../src/modules/DataFlagChildControlIsDown/ViewFlagChildControlIsDown'

const FlagChildControlIsDown = () => {
    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    if (nowData !== null) {

        return (
            <>
                <ProviderContainer path=''>
                    <>
                        <ViewFlagChildControlIsDown data={nowData['flagChildControlIsDown']} />
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

export default FlagChildControlIsDown