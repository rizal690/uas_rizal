import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    NavbarText
} from 'reactstrap';
import { AuthContext } from '../../App';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {state, dispatch} = useContext(AuthContext)
    return (
        < div >
            <Navbar className="navbar-dark bg-dark" expand="md">
                <NavbarBrand href="/">Anjay Store</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                          <NavLink href="/homepage">Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/supplier">Supplier</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/barang">Barang</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="default"
                        onClick={()=>
                        dispatch({
                            type:"LOGOUT"
                        })}>
                            {state.isAuthenticated && (
                                <NavLink>"LOGOUT"</NavLink>
                            )}
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div >
    )
}

export default NavbarComp;