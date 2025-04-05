import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewDataAllBCU from '../../src/modules/ViewDataAllBCU'
import ProviderMain from '../../src/components/Provider/ProviderMain'
import { useRouter } from 'next/router'

const Index = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderMain path=''>
                <>
                    {nowData !== null && <ViewDataAllBCU data={nowData['DATA_ALL_BCU']} />}
                </>
            </ProviderMain>
        </>
    )
}

export default Index
