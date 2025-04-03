import React from 'react'
import HookWebsocket from '../../src/server/HookWebsocket'
import ProviderMain from '../../src/components/Provider/ProviderMain'

const mppt = () => {

    const { readyState, nowData } = HookWebsocket('ws://localhost:81/device')


    return (
        <>
            <ProviderMain>
                <></>
            </ProviderMain>
        </>
    )
}

export default mppt