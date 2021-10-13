import {useState,useEffect, useLayoutEffect} from "react";

function DashboardProducts (){
    const[products, setProducts] = useState([]);
    const[productsList, setProductsList] = useState([]);
    const[countCategory, setCountByCategory] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/api/productos")
        .then (res => res.json())
        .then (data => {
            console.log(data)            
            setProducts(data)
            setProductsList(data.products)
            setCountByCategory(data.countByCategory)
        })

    }, []);

    useEffect(()=>{
        console.log("Se actualizó el componente")
    },[products,productsList,countCategory])

    
    

    return(
        <main>
            <div className="TotalP">
                <h3>Total de productos</h3>
                <p>{products.count}</p>
            </div>
            <div className="TotalC">
                <h3>Total de categorías</h3>
                <p>{countCategory.totalCategories}</p>
            </div>
            <div className="lastProduct"> 
                <h3>Último producto creado</h3>
                <p>{}</p>
                

            </div>
            
            <div className="categories">
                <h3>Categorías</h3>
                <p>{countCategory.data}</p>
            </div>
            
            <div className="Pdisp">
                <h3>Productos disponibles</h3>
                <ul>
                    {productsList.map((producto,i)=>{
                        return (<div key={i}>
                            <h4>{producto.name} </h4>
                        </div>
                        )
                    })}
                </ul>

            </div>
            

        </main>
        
    )
}

export default DashboardProducts;