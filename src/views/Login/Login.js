
import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { fontSize } from "@mui/system";
function Login() {
    return (

        <Grid container>
            <Grid item lg={6} xl={6} md={6}>
                <img width={'100%'} height={'100%'} className="container" src="..\images\pngtree-dark-vector-abstract-background-picture-image_1159556.jpg"></img>
            </Grid>
            <Grid item lg={6} xl={6} md={6} justifyContent="center" alignItems="center">
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="105px">
                    <AccountCircleIcon sx={{ fontSize: "100px" }} />

                </Box>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="10vh">
                    <Typography variant="h2">Login</Typography>
                </Box>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="50vh"
                    >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control placeholder="Enter email" />
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
                        <div className="d-grid gap-2">
                        <Button size="lg" variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                        
                    </Form>
                </Box>

            </Grid>
        </Grid>


    )
}

export default Login;