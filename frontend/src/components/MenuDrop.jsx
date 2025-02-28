import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    useColorModeValue
 } from '@chakra-ui/react';
 import { IoCaretDown } from 'react-icons/io5';

const MenuDrop = () => {
    return (
            <Menu>
                <MenuButton as={Button} rightIcon={<IoCaretDown />} color={"brand.900"} bg={useColorModeValue("brand.800", "brand.700")}/>
                <MenuList color={"brand.900"} bg={useColorModeValue("brand.800", "brand.700")}>
                  <MenuItem>Games</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>about</MenuItem>
                  <MenuItem>Login</MenuItem>
                </MenuList>
            </Menu>
    );
};

export default MenuDrop;