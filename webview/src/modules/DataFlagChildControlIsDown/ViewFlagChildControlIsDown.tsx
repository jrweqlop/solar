import React from 'react'
import DataTableView from '../../shared/DataTableView'

interface ViewFlagChildControlIsDownProps {
    data: InternetData['flagChildControlIsDown'] | null
}

const ViewFlagChildControlIsDown: React.FC<ViewFlagChildControlIsDownProps> = ({ data }) => {

    if (data !== null) {
        const dataGD32: DataTableViewType[] = [
            { id: 1, name: 'HV Battery Is Down', value: data['HV_Battery_Is_Down'], unit: 'Boolean' },
            { id: 2, name: 'DcFastCharger Is Down', value: data['DcFastCharger_Is_Down'], unit: 'Boolean' },
            { id: 3, name: 'EV To ESS Is Down', value: data['EV_To_ESS_Is_Down'], unit: 'Boolean' },
            { id: 4, name: 'MPPT Solar Charger Is Down', value: data['MPPT_Solar_Charger_Is_Down'], unit: 'Boolean' },
            { id: 5, name: 'HVInverter Is Down', value: data['HV_Inverter_Is_Down'], unit: 'Boolean' },
        ]

        return (
            <>
                <DataTableView title='' headerName='View Flag Child Control Is Down' data={dataGD32} />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default ViewFlagChildControlIsDown