import React from 'react'
import DataTableView from '../../shared/DataTableView'

interface ViewDataAllEvToEssProps {
    data: InternetData['DATA_ALL_EvToEss'] | null
}
const ViewDataAllEvToEss: React.FC<ViewDataAllEvToEssProps> = ({ data }) => {

    if (data !== null) {

        const dataStatusGun = [
            { id: 1, name: 'Out Process', value: data['statusGun']['Out_Process'], unit: 'boolean' },
            { id: 2, name: 'Charging', value: data['statusGun']['Charging'], unit: 'boolean' },
            { id: 3, name: 'On Process', value: data['statusGun']['On_Process'], unit: 'boolean' },
            { id: 4, name: 'Preparing', value: data['statusGun']['Preparing'], unit: 'boolean' },
            { id: 5, name: 'Available', value: data['statusGun']['Available'], unit: 'boolean' },
        ]

        const statusIsMissing = [
            { id: 1, name: 'Plc Is Missing', value: data['statusIsMissing']['plc_Is_Missing'], unit: 'boolean' },
            { id: 2, name: 'PowerModule Is Missing', value: data['statusIsMissing']['powerModule_Is_Missing'], unit: 'boolean' },
            { id: 3, name: 'PowerMeter Is Missing', value: data['statusIsMissing']['powerMeter_Is_Missing'], unit: 'boolean' },
        ]

        const dataChargeEss: DataTableViewType[] = [
            { id: 1, name: 'Volt', value: data['voltChargeEss_V'], unit: ' V' },
            { id: 2, name: 'Current', value: data['CurrentChargeEss_A'], unit: ' A' },
            { id: 3, name: 'Power', value: data['PowerChargeEss_kW'], unit: ' kW' },
            { id: 4, name: 'Energy', value: data['EnergyChargeEss_kWh'], unit: ' kWh' },
        ]

        const dataInModule: DataTableViewType[] = [
            { id: 1, name: 'Volt', value: data['voltInModule_V'], unit: ' V' },
            { id: 2, name: 'Current', value: data['CurrentInModule_A'], unit: ' A' },
            { id: 3, name: 'Power', value: data['PowerInModule_kW'], unit: ' kW' },
            { id: 4, name: 'Energy', value: data['EnergyInModule_kWh'], unit: ' kWh' },
        ]

        return (
            <>
                <DataTableView headerName='Status Gun' title={'Status Gun'} data={dataStatusGun} />
                <DataTableView headerName='Status Is Missing' title={'Status Is Missing'} data={statusIsMissing} />
                <DataTableView headerName='Data Charge Ess' title={'Data Charge Ess'} data={dataChargeEss} />
                <DataTableView headerName='Data In Module' title={'Data In Module'} data={dataInModule} />
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }


}

export default ViewDataAllEvToEss