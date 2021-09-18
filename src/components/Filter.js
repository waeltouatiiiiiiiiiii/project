
import React from 'react';
import { DropdownButton,Dropdown } from 'react-bootstrap';

import { useDispatch } from "react-redux";
import { setMark, setStorage } from "../redux/computer";



function Filter() {
    const dispatch = useDispatch();

    return (
        <div className='border1'>
            <p> want to Buy :</p>
            <DropdownButton id="dropdown-item-button" title="Computer">
                <Dropdown.ItemText>Chose your computer</Dropdown.ItemText>
                <Dropdown.Item as="button" onClick={dispatch(setMark('HP'))}>HP</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setMark('ASUS'))}>ASUS</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setMark('Lenevo'))}>Lenevo</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setMark('Predator'))}>Predator</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setMark('Alienware'))}>Alienware</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setMark('Dell'))}>Dell</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" title="Storage">
                <Dropdown.ItemText>Chose your Hardware</Dropdown.ItemText>
                <Dropdown.Item as="button" onClick={dispatch(setStorage('1to hdd'))}>1to hdd</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setStorage('120ssd'))}>120ssd</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setStorage('256ssd'))}>256ssd</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setStorage('500hdd'))}>500hdd</Dropdown.Item>
                <Dropdown.Item as="button" onClick={dispatch(setStorage('2to hdd'))}>2to hdd</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Filter

