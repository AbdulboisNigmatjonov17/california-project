import { ArrowDownward, Menu, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import Logo from '../../assets/navLogo.png';
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full h-[10dvh] flex justify-between items-center px-4 md:px-10 lg:px-20">
            <img src={Logo} alt="california-logo" className='w-[120px] md:w-[150px] lg:w-[170px] h-auto' />

            <ul className='hidden md:flex gap-6 lg:gap-10 items-center uppercase text-sm md:text-base'>
                <li className="cursor-pointer hover:text-gray-500">All Products</li>
                <li className="cursor-pointer hover:text-gray-500 flex items-center gap-1">Solutions <ArrowDownward /></li>
                <li className="cursor-pointer hover:text-gray-500">About</li>
                <li className="cursor-pointer hover:text-gray-500">Support</li>
            </ul>
            <div className='sm:flex md:hidden'>
                <IconButton onClick={() => setOpen(true)}>
                    <Menu />
                </IconButton>
            </div>
            <div className='flex gap-3 items-center'>
                <Search className="cursor-pointer hover:text-gray-500" />
                <ShoppingCartOutlined className="cursor-pointer hover:text-gray-500" />
            </div>

            <Drawer anchor="left" open={open} onClose={() => setOpen(false)} className="sm:block md:hidden">
                <List>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="All Products" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="Solutions" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={() => setOpen(false)}>
                        <ListItemText primary="Support" />
                    </ListItem>
                    
                </List>
            </Drawer>
        </nav>
    );
}
