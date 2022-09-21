import { Component } from "react";
import './SearchBox.css'

//Functuion

// export default props => {
//     return (
//         <input type='search' placeholder={props.placeHolder || 'Search'} onChange={props.onChangeFn}></input>
//     )
// }


//Class

class SearchBox extends Component {
    render() {
        const { placeHolder, onChangeFn, className } = this.props
        return (
            <div>
                {<input
                    className={ `search-box ${className}`}
                    type='search'
                    placeholder={placeHolder || 'Search'}
                    onChange={onChangeFn}>
                </input>}
            </div>
        )
    }
}
export default SearchBox
