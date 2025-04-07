import { TableView } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab';
import React, { ReactNode } from 'react'

interface TabViewProps {
    id: number,
    value: string,
    key: string,
    view: ReactNode
}

const TabStorage = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const TabView: TabViewProps[] = [
        { id: 1, value: '1', key: 'ID_18F090F3_HighVoltageEnergyStorage1Data1', view: <></> },
        { id: 2, value: '2', key: 'ID_18F091F3_HighVoltageEnergyStorage1Data2', view: <></> },
        { id: 3, value: '3', key: 'ID_18F092F3_HighVoltageEnergyStorage1Data3', view: <></> },
        { id: 4, value: '4', key: 'ID_18F093F3_HighVoltageEnergyStorage1Data4', view: <></> },
        { id: 5, value: '5', key: 'ID_18F094F3_HighVoltageEnergyStorage1Data5', view: <></> },
    ]

    return (
        <>
            {/* <Box sx={{ width: '100%', typography: 'body1' }}> */}
            <Box sx={{ maxWidth: { xs: 320, sm: 480, lg: 1000 }, bgcolor: 'background.paper' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="ID_18F090F3_HighVoltageEnergyStorage1Data1" value="1" />
                            <Tab label="ID_18F091F3_HighVoltageEnergyStorage1Data2" value="2" />
                            <Tab label="ID_18F092F3_HighVoltageEnergyStorage1Data3" value="3" />
                            <Tab label="ID_18F093F3_HighVoltageEnergyStorage1Data4" value="3" />
                            <Tab label="ID_18F094F3_HighVoltageEnergyStorage1Data5" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">{TabView[0].view}</TabPanel>
                    <TabPanel value="2">{TabView[1].view}</TabPanel>
                    <TabPanel value="3">{TabView[2].view}</TabPanel>
                    <TabPanel value="3">{TabView[3].view}</TabPanel>
                    <TabPanel value="3">{TabView[4].view}</TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default TabStorage