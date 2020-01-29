import React, {Component} from 'react'
import Product from './products/Product'


class Cart extends Component{
    state = {
        totalSum:0,
        products: [
            {
                id:1,
                name:'Samsung',
                price: 200,
                current:200,
            },
            {
                id:2,
                name:'Iphone',
                price: 100,
                current:100,
            }
        ]
    }
   deleteProduct = (id) => {
      let products = this.state.products.filter((product) => {
          if(product.id !== id) {
              return product
          }
      })
     this.setState({products})
      
   }

    products(){
        let products = [...this.state.products];
        let list = products.map( (el , i) => {
                return (
                    <Product deleteProduct={this.deleteProduct} key={el.name} product={el} getTotalSum={this.getTotalSum} />
                )
        })
        return list;
    }
    getTotalSum = (sum,id) => {
       
         let products = [...this.state.products];
         let newProducts = products.map( (product) => {
             if(product.id === id) {
                 product.current = sum
             } 
                 return product
         })
      
         let newTotalSum = 0;
         newProducts.forEach( (product) => {
            newTotalSum += product.current
             
         })

         this.setState({
             products:newProducts,
             totalSum:newTotalSum
         });
        
    }

    renderSum = () => {
        let sum = 0;
        this.state.products.forEach((item) => {
             sum += item.price
        })
        return sum
    }
   
   render() {
     
       
       
    return(
        <>
            <table>
                <thead>
                <tr>
                    <td>Model</td>
                    <td>Price</td>
                    <td>Count</td>
                    <td>Total</td>
                </tr>
                </thead>
                <tbody>
                     {this.products()}
                </tbody>
            </table>
            <hr/>
            <h2>Total: {!this.state.totalSum ? this.renderSum() : this.state.totalSum}</h2>
        </>
    )
   }
}

export default Cart