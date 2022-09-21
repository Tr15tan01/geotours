import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import MarketingEdits from '../components/MarketingEdits'
import FeaturesEdits from '../components/FeaturesEdits';
import Form from 'react-bootstrap/Form';

export default function Dashboard() {
    const [item, setItem] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setItem(e.target.value)
    }

    return (
        <Container>
            <h3 className="text-center">Admin Panel For M Webpage</h3>
            <Form.Select aria-label="Default select example" onChange={handleChange}>
                <option>Select Section To Edit (Click Here)</option>
                <option value="Marketing">Marketing Section</option>
                <option value="Features">Features Section</option>
                <option value="3">Three</option>
            </Form.Select>
            {/* {<MarketingEdits data={item} />} */}
            {item === 'Marketing' && <MarketingEdits />}
            {item === 'Features' && <FeaturesEdits />}
        </Container>
    )
}
