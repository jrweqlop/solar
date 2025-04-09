import { useAtom } from 'jotai'
import React from 'react'
import { NowDataWsJson } from '../../server/ProviderWebsocket'
import { Gauge } from '@mui/x-charts/Gauge'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface TabReportProps {
    data: InternetData | null
}

const TabReport: React.FC<TabReportProps> = ({ data }) => {

    if (data !== null) {

        const soc = data['DATA_ALL_BCU']['ID_18F096F3_HighVoltageEnergyStorage1Status1']['SOC']
        const Max_Cell_Volt = data['DATA_ALL_BCU']['ID_18F092F3_HighVoltageEnergyStorage1Data3']['Max_Cell_Volt'].toFixed(3)
        const Min_Cell_Volt = data['DATA_ALL_BCU']['ID_18F092F3_HighVoltageEnergyStorage1Data3']['Min_Cell_Volt'].toFixed(3)
        const Cell_Volt_AVG = data['DATA_ALL_BCU']['ID_18F092F3_HighVoltageEnergyStorage1Data3']['cell_average'].toFixed(3)

        const TempAVG = data['DATA_ALL_BCU']['Data_Cal']['TempAVG']
        const TempMax = data['DATA_ALL_BCU']['Data_Cal']['TempMax']
        const TempMin = data['DATA_ALL_BCU']['Data_Cal']['TempMin']
        const moduleVoltAVG = data['DATA_ALL_BCU']['Data_Cal']['moduleVoltAVG']
        const moduleVoltMax = data['DATA_ALL_BCU']['Data_Cal']['moduleVoltMax']
        const moduleVoltMin = data['DATA_ALL_BCU']['Data_Cal']['moduleVoltMin']

        return (
            <>
                <Grid container>
                    <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                        <Gauge
                            width={200}
                            height={150}
                            value={soc}
                            startAngle={-90}
                            endAngle={90}
                            outerRadius={50}
                            text={
                                ({ value, valueMax }) => `${value} / ${valueMax}`
                            } />
                    </Grid>
                    <Grid container size={{ xs: 12, sm: 10, md: 9 }}>
                        <Grid size={{ xs: 12, sm: 2 }}>
                            <Stack direction={'column'}>
                                <Typography>
                                    Max Cell Volt
                                </Typography>
                                {Max_Cell_Volt}
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 2 }}>
                            <Stack direction={'column'}>
                                <Typography>
                                    Min Cell Volt
                                </Typography>
                                {Min_Cell_Volt}
                            </Stack>

                        </Grid>
                        <Grid size={{ xs: 12, sm: 2 }}>
                            <Stack direction={'column'}>
                                <Typography>
                                    Cell Average
                                </Typography>
                                {Cell_Volt_AVG}
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default TabReport