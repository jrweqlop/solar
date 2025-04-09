import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React from 'react'

interface ViewDataAllMpptSolarChargerProps {
    data: InternetData['DATA_ALL_MPPT_SOLAR_CHARGER']
}

const ViewDataAllMpptSolarCharger: React.FC<ViewDataAllMpptSolarChargerProps> = ({ data }) => {

    const dataSolar = Object.keys(data).filter((item) => item.includes('solar'))
    const dataBattery = Object.keys(data).filter((item) => item.includes('battery'))

    const unit = ['V', 'A', 'kW', 'kWh']

    const otherData = [
        { id: 1, name: 'Mode Working Enabled', value: String(data.modeWorkingEnabled) },
        { id: 2, name: 'Status Charge', value: String(data.statusCharge) },
        { id: 3, name: 'Efficiency', value: String(data.efficiency) },
    ]

    return (
        <>
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid size={12} container >
                    <Grid size={8}>
                        <List>
                            {otherData.map((item) => {
                                return (
                                    <ListItem key={item.id}>
                                        <ListItemText primary={item.name} secondary={item.value} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>
                <GridViewData name='Solar Cell' value={dataSolar} unit={unit} data={data} />
                <GridViewData name='Battery Cell' value={dataBattery} unit={unit} data={data} />
            </Grid >
        </>
    )
}

export default ViewDataAllMpptSolarCharger

interface GridViewDataProps {
    name: string,
    value: string[]
    unit: string[]
    data: InternetData['DATA_ALL_MPPT_SOLAR_CHARGER']
}

const GridViewData: React.FC<GridViewDataProps> = ({ name, value, unit, data }) => {

    return (
        <>
            <Grid size={4} container p={1} border={'2px solid #2e2e2e'} borderRadius={4}>
                <Grid size={{ xs: 12 }} >
                    <Typography sx={{ fontSize: 20 }} variant='button'>
                        {name}
                    </Typography>
                </Grid>
                {value.map((item, index) => {
                    const value = data[item as keyof InternetData['DATA_ALL_MPPT_SOLAR_CHARGER']]
                    return (
                        <Grid size={12} container key={item}>
                            <Grid size={{ xs: 12, md: 4 }}>{item.split('_')[0]}</Grid>
                            <Grid size={{ xs: 6, md: 4 }} textAlign={'right'}>{Number(value).toFixed(2)}</Grid>
                            <Grid textAlign={'center'} size={{ xs: 6, md: 4 }}>{unit[index]}</Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}