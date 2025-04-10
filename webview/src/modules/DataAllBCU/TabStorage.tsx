import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewDataTable from './ViewDataTable';

interface TabViewProps {
    id: number
    value: string
    name: string
    key: string
}

interface TabStorageProps {
    data: InternetData['DATA_ALL_BCU'] | null
}

const TabStorage: React.FC<TabStorageProps> = ({ data }) => {

    const TabView: TabViewProps[] = [
        { id: 1, value: '1', name: 'Data Cell Battery', key: 'Data_Cal' },
        { id: 2, value: '1', name: 'High Voltage Energy Storage 1 Data 1', key: 'ID_18F090F3_HighVoltageEnergyStorage1Data1' },
        { id: 3, value: '2', name: 'High Voltage Energy Storage 1 Data 2', key: 'ID_18F091F3_HighVoltageEnergyStorage1Data2' },
        { id: 4, value: '3', name: 'High Voltage Energy Storage 1 Data 3', key: 'ID_18F092F3_HighVoltageEnergyStorage1Data3' },
        { id: 5, value: '4', name: 'High Voltage Energy Storage 1 Data 4', key: 'ID_18F093F3_HighVoltageEnergyStorage1Data4' },
        { id: 6, value: '5', name: 'High Voltage Energy Storage 1 Data 5', key: 'ID_18F094F3_HighVoltageEnergyStorage1Data5' },
        { id: 7, value: '6', name: 'High Voltage Energy Storage 1 Status 1', key: 'ID_18F096F3_HighVoltageEnergyStorage1Status1' },
    ]

    return (
        <>
            <Grid container>
                <Grid size={12} p={2}>
                    <div>
                        {TabView.map((item, index) => {
                            return (
                                <Accordion key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span">{item.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <ViewDataTable data={data ? data[item.key as keyof InternetData['DATA_ALL_BCU']] : null} />
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default TabStorage