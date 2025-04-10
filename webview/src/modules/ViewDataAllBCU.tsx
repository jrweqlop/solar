import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <Grid container>
                <Grid size={12} p={2}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span">Module Battery</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container minWidth={500}>
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
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>

        </>
    )
}

export default ViewDataAllBCU