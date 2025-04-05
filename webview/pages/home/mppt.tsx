import ProviderMain from '../../src/components/Provider/ProviderMain'
import ViewDataAllMpptSolarCharger from '../../src/modules/ViewDataAllMpptSolarCharger'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import { useRouter } from 'next/router'

const Mppt = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderMain path=''>
                <>
                    {nowData !== null && <ViewDataAllMpptSolarCharger data={nowData['DATA_ALL_MPPT_SOLAR_CHARGER']} />}
                </>
            </ProviderMain>
        </>
    )
}

export default Mppt