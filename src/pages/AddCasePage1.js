import React from 'react'
import { Container, Row, Col, InputGroup, Form, FormControl, FloatingLabel } from 'react-bootstrap'

const AddCasePage1 = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <h4>Property information:</h4>
                    </Col>
                </Row>
                <InputGroup>
                <FloatingLabel 
                    controlId="floatingInput"
                    label="Street Address"
                    className="mb-3 w-75">
                        <FormControl
                        placeholder="Street Address"
                        aria-label="streetAddress"
                        aria-describedby="basic-addon1"
                        />
                    </FloatingLabel>
                    <FloatingLabel 
                    controlId="floatingInput"
                    label="Unit/Apt/Suite No."
                    className="mb-3 w-25">
                        <FormControl
                        placeholder="Unit/Apt/Suite No."
                        aria-label="aptSuiteNo"
                        aria-describedby="basic-addon1"
                        />
                    </FloatingLabel>
                    </InputGroup>
                    <InputGroup>
                    <FloatingLabel 
                        controlId="floatingInput"
                        label="City"
                        className="mb-3 w-50">
                        <FormControl
                        placeholder="City"
                        aria-label="city"
                        aria-describedby="basic-addon1"
                        />
                        </FloatingLabel>
                        <FloatingLabel 
                        controlId="floatingInput"
                        label="State"
                        className="mb-3 w-25">
                        <FormControl
                        placeholder="State"
                        aria-label="state"
                        aria-describedby="basic-addon1"
                        />
                        </FloatingLabel>
                        <FloatingLabel 
                        controlId="floatingInput"
                        label="ZIP"
                        className="mb-3 w-25">
                        <FormControl
                        placeholder="ZIP"
                        aria-label="zip"
                        aria-describedby="basic-addon1"
                        />
                        </FloatingLabel>
                    </InputGroup>
                    <InputGroup>
                    <Form.Select aria-label="select county" className='py-3'>
                    <option>County</option>
                    <option value="1">Cass County, MO</option>
                    <option value="2">Clay County, MO</option>
                    <option value="3">Jackson County, MO</option>
                    <option value="4">Platte County, MO</option>
                    <option value="5">Johnson County, KS</option>
                    <option value="6">Wyandotte County, KS</option>
                    </Form.Select>
                    </InputGroup>
            </Container>
        </>
    )
}

export default AddCasePage1
