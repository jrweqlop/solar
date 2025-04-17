import { useAtom } from 'jotai'
import React from 'react'
import { NowDataWsJson } from '../../server/ProviderWebsocket'
import { Gauge } from '@mui/x-charts/Gauge'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import GridModule from '../../shared/GridModule'

interface TabReportProps {
    data: InternetData | null
}

const TabReport: React.FC<TabReportProps> = ({ data }) => {

    if (data !== null) {

        const soc = data['DATA_ALL_BCU']['ID_18F096F3_HighVoltageEnergyStorage1Status1']['SOC']

        //Cell Volt
        const Cell_Volt_AVG = data['DATA_ALL_BCU']['ID_18F092F3_HighVoltageEnergyStorage1Data3']['cell_average'].toFixed(3)
        const Max_Cell_Volt = data['DATA_ALL_BCU']['ID_18F092F3_HighVoltageEnergyStorage1Data3']['Max_Cell_Volt'].toFixed(3)
        const Min_Cell_Volt = data['DATA_ALL_BCU']['ID_18F092F3_HighVoltageEnergyStorage1Data3']['Min_Cell_Volt'].toFixed(3)

        const TempAVG = data['DATA_ALL_BCU']['Data_Cal']['TempAVG']
        const TempMax = data['DATA_ALL_BCU']['Data_Cal']['TempMax']
        const TempMin = data['DATA_ALL_BCU']['Data_Cal']['TempMin']
        const moduleVoltAVG = data['DATA_ALL_BCU']['Data_Cal']['moduleVoltAVG']
        const moduleVoltMax = data['DATA_ALL_BCU']['Data_Cal']['moduleVoltMax']
        const moduleVoltMin = data['DATA_ALL_BCU']['Data_Cal']['moduleVoltMin']

        const statusBmuPowerOn = data['DATA_ALL_BCU']['ID_18F096F3_HighVoltageEnergyStorage1Status1']['status_BMU_Power_On']
        const mainPlue = data['DATA_ALL_BCU']['ID_18F096F3_HighVoltageEnergyStorage1Status1']['Contactor_Status_status_contractor_Main_Plus']
        const mainMinus = data['DATA_ALL_BCU']['ID_18F096F3_HighVoltageEnergyStorage1Status1']['Contactor_Status_status_contractor_Main_Minus']

        const LoadBattery = data['DATA_ALL_BCU']['ID_18F090F3_HighVoltageEnergyStorage1Data1']['P_Plus_volt']
        const Battery = data['DATA_ALL_BCU']['ID_18F090F3_HighVoltageEnergyStorage1Data1']['B_Plus_Volt']

        //Contactor_Status_status_contractor_Precharge
        const Precharge = data['DATA_ALL_BCU']['ID_18F096F3_HighVoltageEnergyStorage1Status1']['Contactor_Status_status_contractor_Precharge']

        const rows = [
            { id: 1, text: 'Modules Volt', min: moduleVoltMin, max: moduleVoltMax, avg: moduleVoltAVG },
            { id: 2, text: 'Cell Volt', min: Cell_Volt_AVG, max: Max_Cell_Volt, avg: Min_Cell_Volt },
            { id: 3, text: 'Temp Volt', min: TempAVG, max: TempMax, avg: TempMin }
        ]

        return (
            <>
                <Grid container spacing={1}>
                    <Grid size={{ xs: 12 }} textAlign={'center'}>
                        <Box width={'100%'} justifyContent={'center'} display={'flex'}>
                            <Gauge
                                width={300}
                                height={300}
                                value={soc}
                                startAngle={-90}
                                endAngle={90}
                                outerRadius={50}
                                text={
                                    ({ value, valueMax }) => `${value} / ${valueMax}`
                                } />
                        </Box>
                    </Grid>
                    <Grid container size={12}>
                        <Typography width={'100%'} variant='h5' textAlign={'center'}>
                            Contactor Status
                        </Typography>
                    </Grid>
                    <Grid container size={12} spacing={1} justifyContent={'center'}>
                        <GridModule text='Pre charge' value={Precharge} unit='' />
                        <GridModule text='Status BMU Power ON' value={statusBmuPowerOn} unit='' />
                        <GridModule text='Main Plue' value={mainPlue} unit='' />
                        <GridModule text='Main Minus' value={mainMinus} unit='' />
                    </Grid>
                    <Grid container size={12} spacing={1} justifyContent={'center'}>
                        <GridModule text='Battery Volt' value={LoadBattery} unit='V' />
                        <GridModule text='Load Volt' value={Battery} unit='V' />
                        {/* <GridModule text='Max Cell Volt' value={Max_Cell_Volt} />
                        <GridModule text='Min Cell Volt' value={Min_Cell_Volt} />
                        <GridModule text='Cell Average' value={Cell_Volt_AVG} />

                        <GridModule text='Temp AVG' value={TempAVG} />
                        <GridModule text='Temp Max' value={TempMax} />
                        <GridModule text='Temp Min' value={TempMin} />

                        <GridModule text='Module Volt AVG' value={moduleVoltAVG} />
                        <GridModule text='Module Volt Max' value={moduleVoltMax} />
                        <GridModule text='Module Volt Min' value={moduleVoltMin} /> */}
                    </Grid>
                </Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ fontSize: 50 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Min</TableCell>
                                <TableCell align="right">Max</TableCell>
                                <TableCell align="right">AVG</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rows.map((row) => {
                                let unit
                                let valueMin
                                let valueMax
                                let valueAvg
                                if (row.text.includes('Temp')) {
                                    unit = row.text.includes('Temp') ? ' °C' : ' V'
                                    valueMin = typeof row.min === 'number' ? row.min.toFixed(0) : row.min
                                    valueMax = typeof row.max === 'number' ? row.max.toFixed(0) : row.max
                                    valueAvg = typeof row.avg === 'number' ? row.avg.toFixed(0) : row.avg
                                } else {
                                    unit = row.text.includes('Temp') ? ' °C' : ' V'
                                    valueMin = typeof row.min === 'number' ? row.min.toFixed(3) : row.min
                                    valueMax = typeof row.max === 'number' ? row.max.toFixed(3) : row.max
                                    valueAvg = typeof row.avg === 'number' ? row.avg.toFixed(3) : row.avg
                                }
                                return (
                                    (
                                        <TableRow
                                            key={row.id}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 }, '&:hover': {
                                                    bgcolor: '#ededed'
                                                }
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.text}
                                            </TableCell>
                                            <TableCell align="right">{valueMin} {unit}</TableCell>
                                            <TableCell align="right">{valueMax} {unit}</TableCell>
                                            <TableCell align="right">{valueAvg} {unit}</TableCell>
                                        </TableRow>
                                    )
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
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