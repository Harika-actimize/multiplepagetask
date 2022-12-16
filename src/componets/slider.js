import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import ProductDetails from "./click";
// import CardGroup from 'react-bootstrap/CardGroup';
import axios from "axios"; 

export default class ProductSlider extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            viewDetails:false,
            currentItem:null
        };
    }
    getUsersData() {
        axios
            .get("http://localhost:3000/products")
            .then(res => {
                const data = res.data
                this.setState({products:data})
            })
            .catch((error) => {
                console.log(error)
            })

    }
    
    componentDidMount(){
        this.getUsersData()
    }
    handleClick = () => {
        this.setState({
            viewDetails:false,
            currentItem:null
        })   
      };
    render() {
        return (
            <div>
                {this.state.viewDetails?
                <><ProductDetails product={this.state.currentItem} handleClick={this.handleClick}/>
                <Button style={{marginTop:10}} variant="primary" onClick={this.handleClick}>Home Page</Button>
                </>:
                <div  className="row">
                {this.state.products.map((u,ind)=>{
                    return(
                        <div className="col-md-3 col-sm-1">
                        <Card border="info" key={ind} >
                        <Card.Img variant="top" src={u.imagelink} />
                        <Card.Body>
                        <Card.Title style={{color:"hotpink"}}>{u.imagename}</Card.Title>
                        <Card.Text style={{color:"green"}}>{u.price}</Card.Text>
                        <Card.Text style={{color:"green"}}>{u.actulprice}</Card.Text>
                        {/* <Card.Text  style={{color:"blue"}}>{u.description}</Card.Text> */}
                        <div className="product-actions">
                            {/* <Button variant="primary" style={{marginRight:9}}>Buy Now</Button> */}
                            <Button variant="primary" onClick={()=>{
                                this.setState({currentItem:u,viewDetails:true})
                            }}>Viwe Details</Button>
                        </div>
                        </Card.Body>
                        </Card>  
                         </div>   
                    )
                })}
                </div>}
            </div>
        )
    }
}