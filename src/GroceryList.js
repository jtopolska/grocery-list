import { Component } from "react";
import icon from './bag.png';

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            groceryList: []
        }
    }

    onChangeInput(e) {
        this.setState({inputValue: e})
    }

    addItem() {
        if (this.state.inputValue === '') {
            alert('Please enter an item')
        }
        else {
            let itemArray = this.state.groceryList;
            itemArray.push(this.state.inputValue);
            this.setState({groceryList: itemArray, inputValue: ''});
        } 
    }

    itemCrossed(event) {
        let li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        this.setState({groceryList: []})
    }

    onEnter(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="big-container">
                <form onSubmit={(e) => this.onEnter(e)} className="container">
                    <h2>Grocery List</h2>
                    <input type='text' onChange={(e) => this.onChangeInput(e.target.value)} value={this.state.inputValue} />
                    <button className="btn add" onClick={() => this.addItem()}>Add</button>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.itemCrossed} key={ index }>
                                <img src={ icon } alt='Shopping bag' className='icon' />
                                { item }
                            </li>
                        ))}
                    </ul>
                    <button className="btn del" onClick={() => this.deleteItem()}>Delete</button>
                </form>
            </div>
        )
    }
}