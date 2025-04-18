import ProviderMain from '../../src/components/Provider/ProviderMain'
import ViewDataAllMpptSolarCharger from '../../src/modules/DataAllMppt/ViewDataAllMpptSolarCharger'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ProviderContainer from '../../src/components/Provider/ProviderContainer'

const Mppt = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderContainer path=''>
                <>
                    <ViewDataAllMpptSolarCharger data={nowData ? nowData['DATA_ALL_MPPT_SOLAR_CHARGER'] : null} />
                </>
            </ProviderContainer>
        </>
    )
}

export default Mppt