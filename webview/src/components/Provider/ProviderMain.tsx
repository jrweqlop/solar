import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TimeClock from '../../shared/TimeClock';

interface ProviderMainProps {
    path: string,
    children: React.ReactNode
}

interface ListMenuViewProps {
    id: number, name: string, path: string
}

const ListMenuView: ListMenuViewProps[] = [
    { id: 1, name: 'MonitorFrom GD32', path: '' },
    { id: 2, name: 'Status Command On', path: '' },
    { id: 3, name: 'Flag Child Control Is Down', path: '' },
    { id: 4, name: 'BCU', path: '' },
    { id: 5, name: 'DC FastCharger', path: '' },
    { id: 6, name: 'EvToEss', path: '' },
    { id: 7, name: 'HV Inverter', path: '' },
    { id: 8, name: 'MPPT Solar Charger', path: '' },
]

const drawerWidth = 240;

export const ProviderMain: React.FC<ProviderMainProps> = ({ children, path }) => {

    const [selectView, setSelectView] = useState<ListMenuViewProps>(ListMenuView[0])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Solar Charger
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <TimeClock />
                    <List>
                        {ListMenuView.map((text, index) => (
                            <ListItem key={text.id} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default ProviderMain