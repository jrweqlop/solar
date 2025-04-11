import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'
import DataTableView from '../../shared/DataTableView'

interface ViewDataAllHVInverterProps {
    data: InternetData | null
}
const ViewDataAllHVInverter: React.FC<ViewDataAllHVInverterProps> = ({ data }) => {

    if (data !== null) {
        const dataInverter = [
            { id: 1, name: 'Status Inverter On', value: data['DATA_ALL_HV_Inverter']['statusInverterOn'], unit: 'Boolean' },
            { id: 2, name: 'Volt In', value: data['DATA_ALL_HV_Inverter']['volt_in'], unit: ' V' },
            { id: 3, name: 'Current In', value: data['DATA_ALL_HV_Inverter']['current_in'], unit: ' A' },
            { id: 4, name: 'power In', value: data['DATA_ALL_HV_Inverter']['power_in'], unit: ' kW' },
            { id: 5, name: 'Energy In', value: data['DATA_ALL_HV_Inverter']['Energy_in'], unit: ' kWh' },
            { id: 6, name: 'Volt Out', value: data['DATA_ALL_HV_Inverter']['volt_out'], unit: ' V' },
            { id: 7, name: 'Current Out', value: data['DATA_ALL_HV_Inverter']['current_out'], unit: ' A' },
            { id: 8, name: 'Power Out', value: data['DATA_ALL_HV_Inverter']['power_out'], unit: ' kW' },
            { id: 9, name: 'Energy Out', value: data['DATA_ALL_HV_Inverter']['Energy_out'], unit: ' Kwh' },
            { id: 10, name: 'Efficiency', value: data['DATA_ALL_HV_Inverter']['efficiency'], unit: ' %' }
        ]

        return (
            <>
                <DataTableView headerName='Data All HV Inverter' title='Data All HV Inverter' data={dataInverter} />
            </>
        )
    } else {
        return (
            <></>
        )
    }


}

export default ViewDataAllHVInverter