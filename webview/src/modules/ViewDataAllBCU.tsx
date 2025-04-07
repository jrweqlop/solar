import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';

interface ViewDataAllBCUProps {
    data: InternetData['DATA_ALL_BCU']
}

interface ViewBattery {
    id: string,
    value: DataBattPack
}

const ViewDataAllBCU: React.FC<ViewDataAllBCUProps> = ({ data }) => {

    const [num, setNum] = useState<number>(0)

    const [batteryCellNum, setBatterCellNum] = useState<ViewBattery[]>([])
    const [thisDataBattery, setThisDataBattery] = useState<ViewBattery | null>(null)
    const dataBattery = data['ALL_DATA_BATTERY_PACK_AND_CELL']
    const dataCal = data['Data_Cal']

    const loadData = () => {
        const value = Object.keys(dataBattery).map((item) => {
            return { id: item, value: dataBattery[item] }
        })
        setBatterCellNum(value)
        setThisDataBattery(value[num])
    }

    const clickView = (index: number, item: ViewBattery) => {
        setThisDataBattery(item)
        setNum(index)
    }

    useEffect(() => {
        loadData()
    }, [data])

    return (
        <>
            <Grid container minWidth={500}>
                <Grid size={12} container spacing={1}>
                    <Grid size={12}>
                        <Typography variant='h6'>
                            {`Data Call`}
                        </Typography>
                    </Grid>
                    {Object.entries(dataCal).map((item, index) => {
                        return (
                            <Grid sx={{ border: '2px solid black', borderRadius: 3, '&:hover': { bgcolor: ' #d6d6d6' } }} textAlign={'center'} size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
                                <ListItemText primary={item[0]} secondary={item[1]} />
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container size={12}>
                    {batteryCellNum.map((item, index) => {
                        return (
                            <Grid size={{ xs: 6, sm: 6, md: 3, lg: 2, xl: 1.5 }} py={0.5} px={0.5} key={index}>
                                <Button fullWidth variant={thisDataBattery?.id === item.id ? 'contained' : 'outlined'} startIcon={<BatteryUnknownIcon />} onClick={() => clickView(index, item)}>{item.id}</Button>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid size={12}>
                    {thisDataBattery && (
                        <>
                            <Grid size={12} container spacing={1}>
                                <Grid size={12}>
                                    <Typography variant='h6'>
                                        modlue : {thisDataBattery.id}
                                    </Typography>
                                </Grid>
                                {Object.entries(thisDataBattery.value.dataCellInPack).map((item, index) => {
                                    return (
                                        <Grid size={{ xs: 4, sm: 2 }} textAlign={'center'} sx={{ border: '2px solid black', borderRadius: 3, '&:hover': { bgcolor: ' #d6d6d6' } }} key={index} >
                                            <ListItemText primary={item[0]} secondary={item[1]} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </>
                    )}
                </Grid>
            </Grid >

            {/* {JSON.stringify(thisDataBattery)} */}
        </>
    )
}

export default ViewDataAllBCU