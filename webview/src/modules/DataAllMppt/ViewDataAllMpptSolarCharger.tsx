import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import DataTableView from '../../shared/DataTableView'

interface ViewDataAllMpptSolarChargerProps {
    data: InternetData['DATA_ALL_MPPT_SOLAR_CHARGER'] | null
}

const ViewDataAllMpptSolarCharger: React.FC<ViewDataAllMpptSolarChargerProps> = ({ data }) => {

    if (data !== null) {

        const otherData = [
            { id: 1, name: 'Mode Working Enabled', value: data.modeWorkingEnabled },
            { id: 2, name: 'Status Charge', value: data.statusCharge },
            { id: 3, name: 'Efficiency', value: data.efficiency },
        ]

        const dataSolarCell: DataTableViewType[] = [
            { id: 1, name: 'Volt', value: data['volt_in_solar'], unit: ' V' },
            { id: 2, name: 'Current', value: data['current_in_solar'], unit: ' A' },
            { id: 3, name: 'Power', value: data['power_in_solar'], unit: ' kW' },
            { id: 4, name: 'Energy', value: data['Energy_in_solar'], unit: ' kWh' },
        ]

        const dataBatteryCell: DataTableViewType[] = [
            { id: 1, name: 'Volt', value: data['volt_out_battery'], unit: ' V' },
            { id: 2, name: 'Current', value: data['current_out_battery'], unit: ' A' },
            { id: 3, name: 'Power', value: data['power_out_battery'], unit: ' kW' },
            { id: 4, name: 'Energy', value: data['Energy_out_battery'], unit: ' kWh' },
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
                                            <ListItemText primary={item.name} secondary={typeof item.value === 'number' ? item.value.toFixed(2) : String(item.value)} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Grid >
                <DataTableView headerName='Data Batter Cell' title={'Data Batter Cell'} data={dataBatteryCell} />
                <DataTableView headerName='Data Solar Cell' title={'Data Solar Cell'} data={dataSolarCell} />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default ViewDataAllMpptSolarCharger