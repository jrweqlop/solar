'use client'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React from 'react'
import { useAtom } from 'jotai'
import { DataWsJson } from '../server/ProviderWebsocket'


const PageHome = () => {

    const [message] = useAtom<InternetData[]>(DataWsJson)

    return (
        <>
            <Container sx={{ py: 3 }}>
                <Grid container>
                    <Grid size={{ xs: 12 }}>

                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <div>
                            {message.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.Time}
                                    </div>
                                )
                            })}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PageHome