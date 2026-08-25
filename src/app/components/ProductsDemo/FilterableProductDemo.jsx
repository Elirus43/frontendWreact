import {useState} from "react";
import "./filterable-product.css"

const initData = [
    // This is Dummy Data
    {category: "Fruits", price: "$2", stocked: true, name: "Banana"},
    {category: "Fruits", price: "$4", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$2", stocked: false, name: "Orange"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Tomato"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Onion"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Bean"},
]

function SearchBar()
{
    return (<div>
        <div>
            <input type={'text'}/>
        </div>
        <div>
            <input type={'checkbox'} />
            <label>Only show products in-stock</label>
        </div>
    </div>)
}

// ProductRow represent each item
function ProductRow({item})
{
    return(<div className={"product-row"}>
    <div className={"product-item"}>{item.name}</div>
    <div className={"product-price"}>{item.price}</div>
    </div>)
}

function ProductCategoryRow({items})
{
    let categoryName = items[0].category;
    return (<div>
    <h4>{categoryName}</h4>
        {
            items.map((item, index) => <ProductRow key={index} item={item}/>)    //we don't have no id, so we use index for unique
        }
    </div>)
}


function ProductTable({items})
{
    // Parent -> Child data passing
    return (<div>
        <ProductCategoryRow items={items} />
        <ProductCategoryRow items={items} />
    </div>)
}



export default function FilterableProductDemo() {
    const [items, setItems] = useState(initData);
    return (<div>
        <SearchBar />
        <ProductTable items={items} />
    </div>)
}