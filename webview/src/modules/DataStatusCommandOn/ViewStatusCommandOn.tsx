import React from 'react'
import DataTableView from '../../shared/DataTableView'

interface ViewStatusCommandOnProps {
    data: InternetData['statusCommandOn'] | null
}

const ViewStatusCommandOn: React.FC<ViewStatusCommandOnProps> = ({ data }) => {

    if (data !== null) {
        const dataGD32: DataTableViewType[] = [
            { id: 1, name: 'On HV Battery', value: data['on_HV_Battery'], unit: 'Boolean' },
            { id: 2, name: 'On DcFastCharger', value: data['on_DcFastCharger'], unit: 'Boolean' },
            { id: 3, name: 'On EV To ESS', value: data['on_EV_To_ESS'], unit: 'Boolean' },
            { id: 4, name: 'On MPPT Solar Charger', value: data['on_MPPT_Solar_Charger'], unit: 'Boolean' },
            { id: 5, name: 'On HV Inverter', value: data['on_HV_Inverter'], unit: 'Boolean' },
            { id: 6, name: 'On Relay SSR AC', value: data['on_Relay_SSR_AC'], unit: 'Boolean' },
        ]

        return (
            <>
                <DataTableView title='' headerName='Status Command On' data={dataGD32} />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default ViewStatusCommandOn