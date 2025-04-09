import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewDataAllBCU from '../../src/modules/ViewDataAllBCU'
import ProviderMain from '../../src/components/Provider/ProviderMain'
import TabStorage from '../../src/modules/DataAllBCU/TabStorage'
import TabReport from '../../src/modules/DataAllBCU/TabReport'

const Index = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderMain path=''>
                <>
                    <TabReport data={nowData} />
                    {nowData !== null && <ViewDataAllBCU data={nowData['DATA_ALL_BCU']} />}
                    <TabStorage data={nowData ? nowData['DATA_ALL_BCU'] : null} />
                </>
            </ProviderMain>
        </>
    )
}

export default Index
