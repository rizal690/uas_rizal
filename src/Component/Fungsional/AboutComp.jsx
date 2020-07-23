import React from 'react'
import { Jumbotron, Button,Container, Link, Row, Col } from 'reactstrap';
import CardComp from './CardComp';


function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Anjay Store</h1>
                <p className="lead">Anjay Store Merupakan Online Shop yang Mempermudahkan kalangan masyarakat yang mempunyai kesibukan dan kegiatan yang banyak sehingga memudahkan mereka dalam berbelanja.
                Anjay Store Terletak di Cilacap jawa tengah yang pertama kali di buka pada tahun 2008</p>
                <hr className="my-2" />
                <p className="lead">

                </p>
                
            </Jumbotron>
            
            <Container>
                <Row>
                    <Col><CardComp id="1" Nama="Rizal Hendriyanto" Alamat="Jalan Brantas 02 rt02/rw06 Karang mangu Kroya"/></Col>

                </Row>
                
            </Container>
            
        </div>
    )
}

export default AboutComp 