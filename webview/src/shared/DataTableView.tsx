import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import React from 'react'

interface DataTableViewProps {
    headerName?: string
    title: string
    data: DataTableViewType[]
}

const DataTableView: React.FC<DataTableViewProps> = ({ headerName, title, data }) => {
    return (
        <>
            <Grid container pt={4} px={2}>
                {headerName && (
                    <Grid size={12} pb={1}>
                        <Typography width={'100%'} variant='h5' sx={{ fontWeight: 'bold' }}>
                            {headerName}
                        </Typography>
                    </Grid>
                )}
                <Grid size={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead sx={{bgcolor:'#0099ff'}}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>{title}</TableCell>
                                    <TableCell align="right">Value</TableCell>
                                    <TableCell align="right">Unit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, index) => {
                                    let value: number | string | boolean = row.value
                                    if (typeof row.value === 'number') value = row.value.toFixed(1)
                                    else value = row.value.toString().toUpperCase()
                                    return (
                                        (
                                            <TableRow
                                                key={index}
                                                sx={{
                                                    '&:last-child td,&:last-child th': { border: 0 },
                                                    '&:hover': {
                                                        bgcolor: '#ededed',
                                                    }
                                                }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell width={80} align="right">{value}</TableCell>
                                                <TableCell width={80} align="right">{row.unit}</TableCell>
                                            </TableRow>
                                        )
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default DataTableView