import React, { useContext } from 'react'
import { Jumbotron, Button, Container,  } from 'reactstrap';
import { AuthContext } from '../../App';
import { Link } from 'react-router-dom';

function HomePage() {
    const { state, dispath } = useContext(AuthContext)
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">Selamat Anda Telah Login!, {state.user}!</h1>
                    <p className="lead">
                    <h2>Pilih Halaman</h2>
                </p>
                
                <Link to="/about"><Button color="primary">About</Button>{' '}</Link>
                <Link to="/supplier"><Button color="primary">Supplier</Button>{' '}</Link>
                <Link to="/barang"><Button color="primary">Barang</Button>{' '}</Link>
                <Link to="/produk"><Button color="primary">Jasa</Button></Link>
                </Container>


                
            </Jumbotron>
        </div>

    )
}

export default HomePage;