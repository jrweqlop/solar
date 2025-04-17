import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface GridModuleProps {
    text: string,
    value: string | number | boolean
    fixed?: number
    unit: string
}
const GridModule: React.FC<GridModuleProps> = ({ text, value, unit, fixed }) => {
    let data = value
    let status: boolean | null = typeof value === 'boolean' ? value : null
    if (typeof value === 'number') data = value.toFixed(fixed ? fixed : 3)
    else if (typeof value === 'boolean') data = String(value).toLocaleString().toUpperCase()
    return (
        <>
            <Grid sx={{
                border: '2px solid black', borderRadius: 3, p: 1,
                '&:hover': {
                    // bgcolor: '#a9e2fd'
                },
                bgcolor: status !== null ? status ? '#3498db' : '#d35400' : ''

            }} size={{ xs: 12, sm: 3 }}>
                <Stack direction={'column'}>
                    <Typography textAlign={'center'} sx={{ color: status === null ? 'black' : 'white', fontSize: 18, fontWeight: 'bold' }}>
                        {text}
                    </Typography>
                    <Typography textAlign={'center'} color='textSecondary' sx={{ fontSize: 16, fontWeight: 'bold' }}>
                        {data} {unit}
                    </Typography>
                </Stack>
            </Grid>
        </>
    )
}
export default GridModule