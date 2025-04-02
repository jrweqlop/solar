import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import Typography from '@mui/material/Typography';

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
        // console.log(value)
        console.log(batteryCellNum)
    }, [data])

    return (
        <>
            {/* {Object.keys(dataBattery).map((item, index) => {
                const thisData = data['ALL_DATA_BATTERY_PACK_AND_CELL'][item as keyof InternetData['DATA_ALL_BCU']['ALL_DATA_BATTERY_PACK_AND_CELL']]
                return (
                    <div key={index}>
                        {item} {JSON.stringify(thisData)}
                        {Object.entries(thisData['dataCellInPack']).map((items, indexs) => {
                            return (
                                <div key={indexs}>
                                    {items[0]} {items[1]}
                                </div>
                            )
                        })}
                    </div>
                )
            })} */}
            <Grid container>
                {batteryCellNum.map((item, index) => {
                    return (
                        <Grid size={{ xs: 12, sm: 3, md: 2 }} py={0.5} px={0.5} key={index}>
                            <Button fullWidth variant={thisDataBattery?.id === item.id ? 'contained' : 'outlined'} startIcon={<BatteryUnknownIcon />} onClick={() => clickView(index, item)}>{item.id}</Button>
                        </Grid>
                    )
                })}
                <Grid size={12}>
                    {JSON.stringify(dataCal)}
                </Grid>

                {thisDataBattery && (
                    <>
                        <Grid size={12} container>
                            <Typography>
                                modlue : {thisDataBattery.id}
                            </Typography>
                            <Grid size={12}>
                                <div>
                                    {Object.entries(thisDataBattery.value.dataCellInPack).map((item, index) => {
                                        return (
                                            <div key={index} >
                                                {item[0]} : {item[1]}
                                            </div>
                                            // <ListItem key={item[0]}>
                                            //     <ListItemText primary={item[0]} secondary={item[1]} />
                                            // </ListItem>
                                        )
                                    })}
                                </div>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>

            {/* {JSON.stringify(thisDataBattery)} */}
        </>
    )
}

export default ViewDataAllBCU