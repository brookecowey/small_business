import React, { Component } from 'react'
import { Container, Divider, Switch } from '@mui/material'
import { useParams } from 'react-router-dom';

const Details = (props) => {
     // console.log("Details props test", this.props.match.params.id)
        const { id } = useParams()
        const biz = props.business.find(b => b.id==id)
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h2 style={{ textAlign: 'center' }}>{biz.name}</h2>
                    <h3 style={{ textAlign: 'left' }}>{biz.location}</h3>
                    <h3 style={{ textAlign: 'left' }}>{biz.hours}</h3>
                    <p style={{ textAlign: 'left' }}>{biz.description}</p>
                  

                </Container>
            </div>
        )
    
}

export default Details