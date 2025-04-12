import React from 'react'
import DataTableView from '../../shared/DataTableView'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

interface ViewDataAllDcFastChargerProps {
    data: InternetData['DATA_ALL_DC_FastCharger'] | null
}

const ViewDataAllDcFastCharger: React.FC<ViewDataAllDcFastChargerProps> = ({ data }) => {

    if (data !== null) {

        const statusGun = [
            { id: 1, name: 'Out Process', value: data['ID_0x170056f4']['statusGun']['Out_Process'], unit: 'Boolean' },
            { id: 2, name: 'Charging', value: data['ID_0x170056f4']['statusGun']['Charging'], unit: 'Boolean' },
            { id: 3, name: 'On Process', value: data['ID_0x170056f4']['statusGun']['On_Process'], unit: 'Boolean' },
            { id: 4, name: 'Preparing', value: data['ID_0x170056f4']['statusGun']['Preparing'], unit: 'Boolean' },
            { id: 5, name: 'Available', value: data['ID_0x170056f4']['statusGun']['Available'], unit: 'Boolean' },
        ]

        const statusLamp = [
            { id: 1, name: 'Lamp G on', value: data['ID_0x170056f4']['statusLamp']['Lamp_G_on'], unit: 'Boolean' },
            { id: 2, name: 'Lamp Y on', value: data['ID_0x170056f4']['statusLamp']['Lamp_Y_on'], unit: 'Boolean' },
            { id: 3, name: 'Lamp R on', value: data['ID_0x170056f4']['statusLamp']['Lamp_R_on'], unit: 'Boolean' },
        ]

        const statusIsMissing = [
            { id: 1, name: 'Emer sw', value: data['ID_0x170056f4']['statusIsMissing']['Emer_sw'], unit: 'Boolean' },
            { id: 2, name: 'Door1', value: data['ID_0x170056f4']['statusIsMissing']['Door1'], unit: 'Boolean' },
            { id: 3, name: 'Door2', value: data['ID_0x170056f4']['statusIsMissing']['Door2'], unit: 'Boolean' },
            { id: 4, name: 'IMD', value: data['ID_0x170056f4']['statusIsMissing']['IMD'], unit: 'Boolean' },
            { id: 5, name: 'Power Module', value: data['ID_0x170056f4']['statusIsMissing']['Power_Module'], unit: 'Boolean' },
            { id: 6, name: 'Power Meter', value: data['ID_0x170056f4']['statusIsMissing']['Power_Meter'], unit: 'Boolean' },
            { id: 7, name: 'PLC', value: data['ID_0x170056f4']['statusIsMissing']['PLC'], unit: 'Boolean' },
        ]

        const ID_0x170156f4 = [
            { id: 1, name: 'Volt Req', value: data['ID_0x170156f4']['Volt_Req'], unit: 'V' },
            { id: 2, name: 'Current Req', value: data['ID_0x170156f4']['Current_Req'], unit: 'A' },
            { id: 3, name: 'Volt Actual', value: data['ID_0x170156f4']['Volt_Actual'], unit: 'V' },
            { id: 4, name: 'Current Actual', value: data['ID_0x170156f4']['Current_Actual'], unit: 'A' },
            { id: 5, name: 'Power Actual_kW', value: data['ID_0x170156f4']['Power_Actual_kW'], unit: 'kW' },
        ]

        const ID_0x170256f4 = [
            { id: 1, name: 'SOC', value: data['ID_0x170156f4']['Volt_Req'], unit: '' },
            { id: 2, name: 'Temp', value: data['ID_0x170156f4']['Current_Req'], unit: '°C' },
            { id: 3, name: 'Volt In', value: data['ID_0x170156f4']['Volt_Actual'], unit: 'V' },
            { id: 4, name: 'Current In', value: data['ID_0x170156f4']['Current_Actual'], unit: 'A' },
            { id: 5, name: 'Power In kW', value: data['ID_0x170156f4']['Power_Actual_kW'], unit: 'kW' }
        ]

        const ID_0x170356f4 = [
            { id: 1, name: 'Ohm To HV Plus', value: data['ID_0x170356f4']['Ohm_to_HV_Plus'], unit: '' },
            { id: 2, name: 'Ohm To HV Sub', value: data['ID_0x170356f4']['Ohm_to_HV_Sub'], unit: '' },
        ]

        return (
            <>

                <Grid container px={2}>
                    <Grid size={12}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }} textAlign={'center'}>Efficiency</Typography>
                        <Typography variant='h5' textAlign={'center'}>{data['efficiency'].toString()}</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            IDM
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>{data['IMD']['Ohm_Per_V_HV_P']?.toString()}</Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>{data['IMD']['Ohm_Per_V_HV_S']?.toString()}</Grid>
                </Grid>
                <DataTableView headerName='ID_0x170056f4' title={'Status Gun'} data={statusGun} />
                <DataTableView headerName='' title={'Status Lamp'} data={statusLamp} />
                <DataTableView headerName='' title={'Status Is Missing'} data={statusIsMissing} />

                <DataTableView headerName='ID_0x170156f4' title={''} data={ID_0x170156f4} />

                <DataTableView headerName='ID_0x170256f4' title={''} data={ID_0x170256f4} />

                <DataTableView headerName='ID_0x170356f4' title={''} data={ID_0x170356f4} />

            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default ViewDataAllDcFastCharger