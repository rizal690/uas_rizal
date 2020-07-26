import React from 'react'
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck, Button
} from 'reactstrap';
import {useContext, CartContext} from 'react';



function RowProduct() {
    
    return (
        <Col>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://watermark.lovepik.com/photo/50094/8791.jpg_wh1200.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Desain interior</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 570.900.000</CardSubtitle></h3>
                        <CardText>oleh Christian Gronross</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://watermark.lovepik.com/photo/50115/9941.jpg_wh1200.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Service Kendaraan</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 38.950.000</CardSubtitle></h3>
                        <CardText>oleh Adrian Payne</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://watermark.lovepik.com/photo/50054/1819.jpg_wh1200.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Fotografi</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 17.500.750</CardSubtitle></h3>
                        <CardText>oleh Phillip Kotler</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://watermark.lovepik.com/photo/50070/3322.jpg_wh1200.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Pengiriman barang</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 25.560.750</CardSubtitle></h3>
                        <CardText>oleh Djaslim Saladin</CardText>
                        <CardText>No Telp : 08222424242</CardText>
                        <Button color="primary">BUY</Button>
                    </CardBody>
                </Card>
                


            </CardDeck>
        </Col>
    )
}

export default RowProduct;