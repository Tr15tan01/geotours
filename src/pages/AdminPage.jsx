import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/nav'
import { Link } from 'react-router-dom'

function AdminPage() {
    const onSubmit = () => {
        console.log('sibmitted')
    }

    return (
        <Container className="signin-body">
            <h3>Only try to sign in if you are page owner</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* <Link to="/">Back to page</Link> */}
            <Nav.Link href="/" className="mt-3">Back To Page &raquo;</Nav.Link>
            <Nav.Link href="/dashboard" className="mt-3">Go Admin (Testing) &raquo;</Nav.Link>
        </Container>
    );
}

export default AdminPage;