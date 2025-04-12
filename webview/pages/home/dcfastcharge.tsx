import React from 'react'
import ViewDataAllDcFastCharger from '../../src/modules/DataAllDcFastCharger/ViewDataAllDcFastCharger'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ProviderContainer from '../../src/components/Provider/ProviderContainer'

const Dcfastcharge = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderContainer path=''>
                <ViewDataAllDcFastCharger data={nowData ? nowData['DATA_ALL_DC_FastCharger'] : null} />
            </ProviderContainer>
        </>
    )
}

export default Dcfastcharge