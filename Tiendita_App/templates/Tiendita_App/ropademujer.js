document.addEventListener('DOMContentLoaded', function() { 
    //DOM Listoko
    obtenerRopaMujer();
    });
    
    async function obtenerRopaMujer(){
        const url = "https://fakestoreapi.com/products/category/women's%20clothing";
        try {
            const ArrayProductos = await fetch(url);
            const ArrayProductosJSON = await ArrayProductos.json();
            console.log(ArrayProductosJSON);
            recorreEInsertaProductos(ArrayProductosJSON)
        }
        catch (error) {
            console.log(error)
            //crearPaginadeError();
        }
    };
    
    function recorreEInsertaProductos(ArrayProductos){
        const ropita = document.getElementById('ropita');
        ArrayProductos.forEach(Producto => {
            const card = CrearTarjetasProductos(Producto);
            ropita.appendChild(card);
            
        });
    }