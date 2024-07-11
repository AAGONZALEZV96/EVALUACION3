document.addEventListener('DOMContentLoaded', function() { 
    //DOM Listoko
    obtenerJoyeria();
    });
    
    async function obtenerJoyeria(){
        const url = "https://fakestoreapi.com/products/category/jewelery";
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
    
    