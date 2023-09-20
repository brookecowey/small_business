import React, { Component } from 'react'
import { Container, Divider, Switch } from '@mui/material'

class Details extends Component {
    state = {
        checked: true,
        heading: 'San Antonio Small Businesses'
    }

    toggleSwitch = () => {
        const newVal = !this.state.checked
        if (newVal) {
            return this.setState({
                heading: 'San Antonio Small Businesses',
                checked: newVal
            })
        }
        return this.setState({
            heading: 'San Antonio Small Businesses',
            checked: newVal
        })
    }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                    <p>
                     Don Pedro's
                    </p>
                    <Divider />
                    <p>
                      Art of Donut
                    </p>
                    <Divider />
                    <p>
                      Feliz Modern
                    </p>
                    <Divider />
                    <p>
                      Early Bird Coffee
                    </p>
                    <Divider />
                    <p>
                      Bless Your Heart
                    </p>

                </Container>
            </div>
        )
    }
}

export default Details