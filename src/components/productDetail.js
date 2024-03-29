import React from 'react'
import Axios from 'axios';
import { connect } from 'react-redux'
import { urlApi } from '../support/urlApi';

class ProductDetail extends React.Component{
    state = {product : {}}
    componentDidMount(){
        this.getDataApi()
    }

    getDataApi(){
        var idUrl = this.props.match.params.id
        Axios.get(urlApi+'/products/'+ idUrl)
        .then((res) =>{
            this.setState({product : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    qtyValidation = () => {
        var qty = this.refs.inputQty.value
        if ( qty < 1){
            this.refs.inputQty.value = 1
        }
    }

    render(){
        var {nama,img,discount,deskripsi,harga} =this.state.product
        return(
            <div className='container'>
                Ini Product Detail
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card" style={{width: '100%'}}>
                            <img className="card-img-top" src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                    </div>
                    <div className='col-md-8'>
                       <h1 style={{color:'#4c4c4c'}}>{nama}</h1> 
                       <div style={{backgroundColor:'#D50000', width:"50px", 
                                height: '22px', color : 'white', textAlign:'center',
                                display:'inline-block'}}> 
                           {discount}%
                       </div>
                       <span style={{fontSize:'12px', fontWeight:'600', color:'#606060',
                                textDecoration: 'line-through'}}>Rp. {harga}</span>
                       <div style={{fontSize:' 24px',
                                    fontWeight: '700',
                                    color :'#FF5722',
                                    marginTop:'22px'}}>Rp. {harga-(harga*(discount/100))}</div>

                        <div className='row'>
                            <div className='col-md-2'>
                                <div style={{marginTop:'13px', color:'#606060', fontWeight:'700', fontSize:'14px'}}>Jumlah</div>
                                <input type='number' onChange={this.qtyValidation} ref='inputQty' min={1} className='form-control' style={{width:'100px', marginTop : '13px'}} />
                            </div>
                            <div className='col-md-6'>
                                <div style={{marginTop:'13px', color:'#606060', fontWeight:'700', fontSize:'14px'}}>Catatan Untuk Penjual</div>
                                <input type='text' style={{marginTop:'13px'}} placeholder="Contoh : warna putih, ukuran xl" className='form-control' />
                            </div>
                        </div>  
                        <div className='row mt-4'>
                            <div className='col-md-8' >
                                <p style={{color:'#606060', fontStyle:'italic'}}>{deskripsi}</p>
                            </div>
                        </div> 
                        {this.props.user === ""
                        ?
                        <div className='row mt-4'>
                            <input disabled className='btn border-secondary col-md-2' value='Add to WishList' />
                            <input disabled className='btn btn-primary col-md-3' value='Beli Sekarang' />
                            <input disabled className='btn btn-success col-md-3' value='Masukan ke Keranjang' />
                        </div>     
                        :
                        <div className='row mt-4'>
                            <input className='btn border-secondary col-md-2' value='Add to WishList' />
                            <input className='btn btn-primary col-md-3' value='Beli Sekarang' />
                            <input className='btn btn-success col-md-3' value='Masukan ke Keranjang' />
                        </div>                            
                        }
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user.username,
    }
} 

export default connect(mapStateToProps)(ProductDetail)