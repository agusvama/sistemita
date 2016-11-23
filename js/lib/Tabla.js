var Tabla = (function(){

    var productos = function(arr_obj_producto) {
        var arr_salida = [];
        var arr_productos = [];
        for(var i = 0; i < arr_obj_producto.length; i++){
            arr_productos.push(arr_obj_producto[i].Nombre);
            arr_productos.push(arr_obj_producto[i].Marca);
            arr_productos.push(arr_obj_producto[i].Precio);

            arr_salida.push(arr_productos);
            arr_productos = [];
        }
        return arr_salida;
    };


    return {
        "productos": productos,
    }
})();
