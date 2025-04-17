import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React, { useEffect, useState } from 'react'

interface ViewDataAllBCUProps {
    data: InternetData['DATA_ALL_BCU'] | null
}

interface ViewBattery {
    id: string,
    value: DataBattPack
}

const ViewDataAllBCU: React.FC<ViewDataAllBCUProps> = ({ data }) => {

    const [num, setNum] = useState<string>('-1')

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string
        if (value === '-1') {
            setNum(value)
            setThisDataBattery(null)
        } else {
            setNum(value)
            setThisDataBattery(batteryCellNum[parseInt(value)])
        }
    };

    const [batteryCellNum, setBatterCellNum] = useState<ViewBattery[]>([])
    const [thisDataBattery, setThisDataBattery] = useState<ViewBattery | null>(null)
    const dataBattery = data ? data['ALL_DATA_BATTERY_PACK_AND_CELL'] : null

    const loadData = () => {
        if (dataBattery !== null) {
            const value = Object.keys(dataBattery).map((item) => {
                return { id: item, value: dataBattery[item] }
            })
            setBatterCellNum(value)
            if (Number(num) === -1)
                setThisDataBattery(null)
            else
                setThisDataBattery(value[Number(num)])
        }
    }

    useEffect(() => {
        loadData()
    }, [data])

    return (
        <>
            <Grid container py={2} >
                <Grid size={12}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Cell Battery</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={num}
                                label="Select Cell Battery"
                                onChange={handleChange}
                            >
                                <MenuItem value={-1} >Not View Data Battery Pack</MenuItem>
                                {batteryCellNum.length > 0 && batteryCellNum.map((item, index) => {
                                    return (
                                        <MenuItem key={item.id} value={index} >Data Battery Pack {index + 1}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                {thisDataBattery?.value.dataCellInPack && (
                    <Grid container size={12}>
                        {Object.entries(thisDataBattery?.value.dataCellInPack).map((item, index) => {
                            return (
                                <Grid p={0.5} size={{ xs: 3, sm: 2, md: 2 }} key={index}>
                                    <ListItem sx={{
                                        border: '2px solid black', borderRadius: 4, textAlign: 'center', '&:hover': {
                                            bgcolor: '#e2e2e2'
                                        }
                                    }} >
                                        <ListItemText primary={item[0]} secondary={item[1]} />
                                    </ListItem>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default ViewDataAllBCU