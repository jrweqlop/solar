import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MenuIcon from '@mui/icons-material/Menu';

interface BasicMenuProps {
    title: string
    data: ListMenuViewProps[]
    onClick: (item: ListMenuViewProps) => void
}

const BasicMenu: React.FC<BasicMenuProps> = ({ title, onClick, data }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const selectMenu = (item: ListMenuViewProps) => {
        setAnchorEl(null);
        onClick(item)
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<MenuIcon />}
                // variant='outlined'
            >
                {title}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {data.map((item, index) => {

                    let thisIcon: React.ReactElement | null = null
                    if (item.name.includes('home')) thisIcon = <HomeFilledIcon />

                    return (
                        <MenuItem key={index} onClick={() => selectMenu(item)}>
                            <ListItemIcon>
                                {thisIcon}
                            </ListItemIcon>
                            <Typography>
                                {item.name}
                            </Typography>
                            {/* <MenuItem key={item.id} onClick={() => handleClose(item)}>{item.name}</MenuItem> */}
                        </MenuItem>
                    )
                })}
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div >
    );
}
export default BasicMenu