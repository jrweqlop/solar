import React from 'react'
import DataTableView from '../../shared/DataTableView'

interface ViewDataMonitorFromGD32Props {
    data: InternetData['monitorFrom_GD32'] | null
}

const ViewDataMonitorFromGD32: React.FC<ViewDataMonitorFromGD32Props> = ({ data }) => {

    if (data !== null) {
        const dataGD32: DataTableViewType[] = [
            { id: 1, name: 'B12V Plus', value: data['B12V_plus'], unit: '' },
            { id: 2, name: 'Temp1', value: data['Temp1'], unit: '°C' },
            { id: 3, name: 'Temp2', value: data['Temp2'], unit: '°C' },
            { id: 4, name: 'Temp3', value: data['Temp3'], unit: '°C' },
            { id: 5, name: 'Temp4', value: data['Temp4'], unit: '°C' },
            { id: 6, name: 'TempAvg', value: data['TempAvg'], unit: '°C' },
            { id: 7, name: 'Emergency IsPush', value: data['Emergency_IsPush'], unit: 'Boolean' },
        ]

        return (
            <>
                <DataTableView title='' headerName='Monitor From GD32' data={dataGD32} />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default ViewDataMonitorFromGD32