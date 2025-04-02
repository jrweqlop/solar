import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import React from 'react'

interface ListViewProps {
    data: InternetData
}

const ListView: React.FC<ListViewProps> = ({ data }) => {

    const { DATA_ALL_HV_Inverter } = data

    const tz = 'Asia/Bangkok'

    return (
        <>
            <Grid container>
                <Grid size={12}>
                    <Typography variant='h4'>
                        {dayjs(data.Time).locale(tz).format('DD/MM/YYYY HH:mm:ss A')}
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <List>
                        {Object.entries(DATA_ALL_HV_Inverter).map((item, index) => {
                            const check = typeof item[1] === 'number' ? item[1].toFixed(2).toString() : item[1].toString()
                            return (
                                // <ListItem key={index}>
                                <ListItemText key={index} primary={item[0].toString()} secondary={check} />
                                // </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>

        </>
    )
}

export default ListView