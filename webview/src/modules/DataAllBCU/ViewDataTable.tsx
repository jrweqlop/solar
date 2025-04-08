import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import React, { useEffect } from 'react'

interface ViewDataTableProps {
    data: object | null
}

const ViewDataTable: React.FC<ViewDataTableProps> = ({ data }) => {

    useEffect(() => {
        console.log(data)
    }, [data])

    if (data !== null) {
        return (
            <>
                <Grid container spacing={1} >
                    {data && (
                        <>
                            {Object.entries(data).map((item) => {
                                console.log
                                return (
                                    <Grid sx={{
                                        border: '2px solid black',
                                        borderRadius: 3,
                                        textAlign: 'center',
                                        '&:hover': {
                                            bgcolor: '#ededed'
                                        }
                                    }} size={4} key={item[0]}>
                                        <ListItemText primary={item[0]} secondary={item[1]} />
                                    </Grid>
                                )
                            })}
                        </>
                    )}
                </Grid>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default ViewDataTable