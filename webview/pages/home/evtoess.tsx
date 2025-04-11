import React from 'react'
import ProviderContainer from '../../src/components/Provider/ProviderContainer'
import { useAtom } from 'jotai'
import { NowDataWsJson } from '../../src/server/ProviderWebsocket'
import ViewDataAllEvToEss from '../../src/modules/DataAllEvToEss/ViewDataAllEvToEss'

const Evtoess = () => {

    const [nowData] = useAtom<InternetData | null>(NowDataWsJson)

    return (
        <>
            <ProviderContainer path=''>
                <>
                    <ViewDataAllEvToEss data={nowData ? nowData['DATA_ALL_EvToEss'] : null} />
                </>
            </ProviderContainer>
        </>
    )
}

export default Evtoess