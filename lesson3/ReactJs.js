const products = [
    { id: 1, name: "Iphone 13 promax", price: 100000 },
    { id: 2, name: "Iphone 11", price: 120000 },
    { id: 3, name: "Samsung", price: 161000 },
    { id: 4, name: "Hic", price: 122222 }
]

const root = document.querySelector("#tbody");

const reactRoot = ReactDOM.createRoot(root);

const element = products.map(product =>
    <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><button className="btn btn-danger" onClick={() => products.filter((item) => item.id != product.id)}>Remove</button></td>

    </tr>
)


reactRoot.render(element)
// Cai dat babel
// npm install -g @babel/core @babel/cli
// npm install --save-dev @babel/preset-react
// npx babel <ten file> -w -o <ten file>