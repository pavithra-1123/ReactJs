import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export let HomePage=()=>
{
    return(
        <>
         <Navbar bg='primary' expand='lg'>
                <NavbarBrand href="#Home">Navigation</NavbarBrand>
                <NavbarToggle aria-controls="mynavbar"></NavbarToggle>
                <NavbarCollapse id="mynavbar"> 
                    <Nav className='ms-2'>
                        <Nav.Link href="/list1">ListEmployeedetails</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}