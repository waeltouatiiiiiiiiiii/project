import React from 'react'
import Card from './Card'
import {Col , Row} from 'react-bootstrap'
import { useSelector } from "react-redux";

function List({list}) {
    const computer = useSelector((state) => state.computer.value);

    return (
        <Row>
            {list.map((value, index)=>{
             if (computer.all)
                return <Col xs='12' sm='4' lg='3' key={index} className='mb-3'><Card element={value}  /></Col>
            
             if (computer.mark === value.title)
                return <Col xs='12' sm='4' lg='3' key={index} className='mb-3'><Card element={value}  /></Col>
            return <Col xs='12' sm='4' lg='3' key={index} className='mb-3'><Card element={value}  /></Col>
            })}         
        </Row>
    )
}

export default List

