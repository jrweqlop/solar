import ViewDataAllHVInverter from '../../src/modules/DataAllHVInverter/ViewDataAllHVInverter'
import ProviderMain from '../../src/components/Provider/ProviderMain'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ProviderContainer from '../../src/components/Provider/ProviderContainer'

const Hvinverter = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderContainer path=''>
                <>
                    <ViewDataAllHVInverter data={nowData} />
                </>
            </ProviderContainer>
        </>
    )
}

export default Hvinverter