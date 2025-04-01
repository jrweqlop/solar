import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'

interface ListViewProps {
    data: InternetData
}

const ListView: React.FC<ListViewProps> = ({ data }) => {

    const { DATA_ALL_HV_Inverter } = data

    return (
        <>
            <List>
                {Object.entries(DATA_ALL_HV_Inverter).map((item, index) => {
                    console.log(item[0], item[1])
                    const check = typeof item[1] === 'number' ? item[1].toFixed(2).toString() : item[1].toString()
                    return (
                        <ListItem key={index}>
                            <ListItemText primary={item[0].toString()} secondary={check} />
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}

export default ListView