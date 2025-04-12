import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React from 'react'
import BasicMenu from '../../modules/Menu/MenuView'
import { useRouter } from 'next/navigation'
import Typography from '@mui/material/Typography'
import { useAtom } from 'jotai'
import { nowTime } from '../../shared/TimeClock'

interface ProviderContainerProps {
    path: string
    children: React.ReactNode
}
const ProviderContainer: React.FC<ProviderContainerProps> = ({ children, path }) => {

    const router = useRouter()

    const [lastTime] = useAtom(nowTime)

    const ListMenuView: ListMenuViewProps[] = [
        { id: 1, name: 'home', path: '/' },
        { id: 1, name: 'MonitorFrom GD32', path: '/home/monitorfromgd32' },
        { id: 2, name: 'Status Command On', path: '/home/statuscommandon' },
        { id: 3, name: 'Flag Child Control Is Down', path: '/home/flagchildcontrolisdown' },
        { id: 4, name: 'BCU', path: '/home' },
        { id: 5, name: 'DC FastCharger', path: '/home/dcfastcharge' },
        { id: 6, name: 'EvToEss', path: '/home/evtoess' },
        { id: 7, name: 'HV Inverter', path: '/home/hvinverter' },
        { id: 8, name: 'MPPT Solar Charger', path: '/home/mppt' },
    ]

    const handleClick = (item: ListMenuViewProps) => {
        router.push(item.path)
    }

    return (
        <>
            <Container>
                <Grid container component={'main'}>
                    <Grid container size={{ xs: 12 }} mt={2} p={1} alignItems={'center'}>
                        <Grid size={{ xs: 6, md: 6 }} textAlign={{ xs: 'left', sm: 'left' }}>
                            <BasicMenu title={'Solar Charger'} data={ListMenuView} onClick={handleClick} />
                        </Grid>
                        <Grid size={{ xs: 6, md: 6 }} >
                            <Typography width={'100%'} textAlign={{ xs: 'right' }}>
                                {lastTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12 }}>
                    <Grid size={{ xs: 6 }}></Grid>
                    <Grid size={{ xs: 6 }}></Grid>
                </Grid>
                <Box component={'main'}>
                    {children}
                </Box>
            </Container >
        </>

    )
}

export default ProviderContainer