import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LanguageItem(props){ 
    const {id, name} = props.item

    return (
        <Card bg='dark'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            
                <Link to={'/language/'+ id} className="btn btn-secondary">상세보기</Link>
            </Card.Body>
        </Card>
    )
}

export default LanguageItem