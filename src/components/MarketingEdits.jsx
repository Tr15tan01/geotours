import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button'
import Nav from 'react-bootstrap/nav'
import { useLayoutEffect, useRef } from 'react';
import { useState } from 'react';

function MarketingEdits(props) {

    const formRef = useRef(null)

    const url = "http://localhost:8888/.netlify/functions/function3"
    const marketingUrl = "http://localhost:8888/.netlify/functions/function2"

    const [info, setInfo] = useState('')
    const [marketingInfo, setMarketingInfo] = useState([])

    const dummyInfo = [
        { heading: 'Heading 1', content: 'Content 1' },
        { heading: 'Heading 2', content: 'Content 2' },
        { heading: 'Heading 3', content: 'Content 3' }
    ]

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
        console.log({ info })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // let myForm = document.getElementById("myForm");
        let myForm = formRef.current;
        let formData = new FormData(myForm);
        console.log('myForm', new URLSearchParams(formData).toString())
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };

    useLayoutEffect(() => {
        console.log('used effect')
        fetch(marketingUrl).then(res => res.json()).then(data => {
            // console.log(data.marketing)
            setMarketingInfo(data)
        }).catch(err => console.log(err))
    }, [])

    console.log({ marketingInfo })

    return (

        <Container className="mt-3">
            {/* todo  must incorporate all this in one component */}
            {/* <h4 className="text-center">Edit {props.data} Section</h4> */}
            <h4 className="text-center">Edit Marketing Section</h4>
            <Form id="myForm" data-netlify="true" ref={formRef} onSubmit={handleSubmit}>
                {dummyInfo.map((item, idx) => {
                    return (
                        <>
                            <Form.Group className="mb-1">
                                <Form.Label>Heading {idx + 1}</Form.Label>
                                <Form.Control name="heading" type="text" defaultValue={item.heading} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content {idx + 1}</Form.Label>
                                <Form.Control name="content" as="textarea" onChange={handleChange} rows={3} defaultValue={item.content} />
                            </Form.Group>
                            <hr className="featurette-divider" />
                        </>)
                })}


                <div className="d-grid gap-2 mt-3">
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>
            <Nav.Link href="/" className="mt-3">Back To Page &raquo;</Nav.Link>
        </Container >


    );
}

export default MarketingEdits;

// <Container className="mt-3">
//     <h4 className="text-center">Edit {props.data} Section</h4>
//     <Form id="myForm" data-netlify="true" ref={formRef} onSubmit={handleSubmit}>
//         <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//             <Form.Label>Heading One</Form.Label>
//             <Form.Control name="heading1" type="text" onChange={handleChange} placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Text One</Form.Label>
//             <Form.Control name="text1" as="textarea" onChange={handleChange} rows={3} />
//         </Form.Group>
//         <hr className="featurette-divider" />
//         <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//             <Form.Label>Heading Two</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Text Two</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//         <hr className="featurette-divider" />
//         <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//             <Form.Label>Heading Three</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Text Three</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//         <div className="d-grid gap-2 mt-3">
//             <Button variant="primary" type="submit" onClick={handleSubmit}>
//                 Submit
//             </Button>
//         </div>
//     </Form>
//     <Nav.Link href="/" className="mt-3">Back To Page &raquo;</Nav.Link>
// </Container>


// play
// const play = {
//     heading: ['Airport Transfer', 'Hotel Reservation', 'Transport Accent'],
//     content: [
//         'This is Just a dummy content to test Netlify and React.js together',
//         'Hotel ReservationHotel ReservationHotel Reservation test Netlify and React.js together',
//         'This is Just a dummy content to test Netlify and React.js together'
//     ]
// }

// let datatoadd = []
// for (let i = 0; i < play.heading.length; i++) {
//     datatoadd.push({ heading: play.heading[i], content: play.content[i] })
// }
// const play1 = { heading: play.heading[0], content: play.content[0] }

// console.log({ datatoadd })