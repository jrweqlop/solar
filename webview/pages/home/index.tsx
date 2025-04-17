import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewDataAllBCU from '../../src/modules/DataAllBCU/ViewDataAllBCU'
import ProviderMain from '../../src/components/Provider/ProviderMain'
import TabStorage from '../../src/modules/DataAllBCU/TabStorage'
import TabReport from '../../src/modules/DataAllBCU/TabReport'
import ProviderContainer from '../../src/components/Provider/ProviderContainer'

const Index = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderContainer path=''>
                <>
                    <TabReport data={nowData} />
                    <ViewDataAllBCU data={nowData ? nowData['DATA_ALL_BCU'] : null} />
                    <TabStorage data={nowData ? nowData['DATA_ALL_BCU'] : null} />
                </>
            </ProviderContainer>
        </>
    )
}

export default Index
