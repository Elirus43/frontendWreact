import {useState} from "react";
import "./filterable-product.css"
import classNames from "classnames";


const initData = [
    // This is Dummy Data
    {category: "Fruits", price: "$2", stocked: true, name: "Banana"},
    {category: "Fruits", price: "$4", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$2", stocked: false, name: "Orange"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Tomato"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Onion"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Bean"},
]

function SearchBar({onFilter})
{
    // SearchBox and Stock check bind
    const [formState, setFormState] = useState({
        item: '',
        inStock: false,
    })
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            item: e.target.value,
        });
        onFilter({
            ...formState,
            item: e.target.value,
        });

    }
    const LabelonChangeHandler = (e) => {
        setFormState({
            ...formState,
            inStock: e.target.checked,
        });
        onFilter({
            ...formState,
            inStock: e.target.checked,
        });
    }
    console.log('FormState ', formState)

    return (<div>
        <div>
            <input type={'text'} value={formState.item} onChange={onChangeHandler} />
        </div>
        <div>
            <input type={'checkbox'} value={formState.inStock} onChange={LabelonChangeHandler} />
            <label>Only show products in-stock</label>
        </div>
    </div>)
}

// ProductRow represent each item
function ProductRow({item})
{
    // with dynamic css, and render conditionally
    const productClass = classNames({
        'product-item' : true,
        'out-of-stock' : !item.stocked,
    })

    return(<div className={"product-row"}>
    <div className={productClass}>{item.name}</div>
    <div className={"product-price"}>{item.price}</div>
    </div>)
}

function ProductCategoryRow({items})
{
    let categoryName = items[0].category;
    return (<div>
    <h2 className={"product-category"}>{categoryName}</h2>
        {
            items.map((item, index) => <ProductRow key={index} item={item}/>)    //we don't have no id, so we use index for unique
        }
    </div>)
}

// Group code logic
function groupByCategory({items})
{
    let group = {};
    for (const item of items)
    {
        if(group[item.category]) {
            group[item.category].push(item);
        }
        else {
            group[item.category] = [item];
        }
    }
    return group;
}

function ProductTable({items})
{
    const group = groupByCategory({items});
    console.log("Group", group);
    const categories = Object.keys(group);
    console.log("Categories", categories);

    // Parent -> Child data passing
    return (<div>
        {
            categories.map((category, index) => <ProductCategoryRow key={index} items={group[category]}/>)
        }
    </div>)
}

// Filter item section, filter with name, then with stock availability
function filterItemByName (items, name) {
    console.log('filterItemsByName ',name ,' items ',items);
    if(name==='')
    {
        console.log('Name empty ',name);
        return [...items];
    }
    return items.filter(item=>item.name.includes(name));
}
function filterItemByStock (items, stocked) {
    console.log('filterItemByStock ',items , 'stocked ',stocked );
    if(stocked){
        return items.filter(item=>item.stocked );
    }
    else
    {
        return [...items];
    }
}


export default function FilterableProductDemo() {
    const [items, setItems] = useState(initData);
    const onFilter = (formState) => {
        console.log('Filter Form State ', formState);

        let newItems = filterItemByStock(initData, formState.inStock);
        newItems = filterItemByName(newItems, formState.item);
        setItems(newItems);
    }

    return (<div>
        <SearchBar onFilter={onFilter} />
        <ProductTable items={items} />
    </div>)
}