import React, {Component}  from 'react';
import Counter from '../counters/Counter'

class Product extends Component {
    constructor(props) {
        super(props)
       // console.log(this.props.getTotalSum);
        
        this.state = {
            total:'',
            cnt:1,
        }
    }

    calcTotal = (cnt) => {
        let newCnt = cnt;
        let total = cnt * this.props.product.price;
      this.setState({
          cnt:newCnt,
          total:total
      });   
     this.props.getTotalSum(total, this.props.product.id)
    }

    render() {
        let {product, deleteProduct} = this.props;
        return(
            <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><Counter min={1} max={5} calcTotal={this.calcTotal} /></td>
                <td>{this.state.total ? this.state.total : this.props.product.price}</td>
                <td><button onClick={() => deleteProduct(this.props.product.id)}>X</button></td>
            </tr>
        )
    }
    
}
export default Product