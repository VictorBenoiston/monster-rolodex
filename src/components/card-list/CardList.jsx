import Card from '../layout/Card'
import { Component } from "react";
import './CardList.css'


// export default props => {
// return (
//     props.list
//         .map((item) => {
//                   return (
//                     <div key={item.id}>
//                       <h1>
//                         {item.id} - {item.name}
//                       </h1>
//                     </div>
//                   );
//                 })
// )}

class CardList extends Component {

    render() {

        const { list } = this.props  // Destructuring props { The same name from the variable into the new one }

        return (
            console.log('Render from CardList'),
            <div className='cardList'>
                {list
                    .map((item) => {
                        const {id} = item
                        return (
                            <div key={id} >
                                <Card item={item}/>
                            </div>
                        );
                    })}
            </div>
        )
    }
}

export default CardList