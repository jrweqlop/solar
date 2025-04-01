'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

interface PageIndexProps {
    nextPage: () => void
}

const PageIndex: React.FC<PageIndexProps> = ({ nextPage }) => {

    return (
        <>
            <Grid container sx={{ px: 5, py: 5, }} justifyContent={'center'}>
                <Grid size={{ xs: 12, md: 8 }} textAlign={'center'}>
                    <Stack direction={'column'} justifyContent={'center'}>
                        <div style={{ justifyContent: 'center' }}>
                            <img
                                src={'main/ecu-mail-wallpaper_main.jpg'}
                                alt='ecu-shop-solar-charger'
                                width={'80%'}
                                style={{
                                    borderRadius: 12,
                                    border: '5px solid #2e2e2e'
                                }}
                            />
                        </div>
                        <div>
                            <Stack spacing={1} direction={'row'} justifyContent={'center'}>
                                <Button startIcon={<CloudQueueIcon fontSize='large' />} variant='contained' onClick={nextPage} size='large'>ดูข้อมูล</Button>
                            </Stack>
                        </div>
                    </Stack>
                </Grid >
            </Grid >
        </>
    )
}

export default PageIndex