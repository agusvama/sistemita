//generar una tabla
var GUI = (function(){

    var productos = function(){
        var tabla = HTML.table(['Nombre', 'Descripción', 'Precio'], 
                [['Tenis', 'nuevos, color azul', '500']]);
        tabla = HTML.envolver(tabla);
        document.body.appendChild(tabla.set_attribute('border', '1').
                element());
    };

    var encabezado = function(){
        document.body.appendChild(HTML.new_element('h2', {}).
                set_text('Listado de productos').
                element());
    };

    var buscador = function(){
        var div = HTML.new_element('div', {});

        div.append_child(HTML.new_element('label', {}).
                set_text('Nombre').
                element());

        div.append_child(HTML.new_element('input', {'type': 'checkbox'}).
                set_text('Sólo ofertas').
                element());
        
        div.append_child(HTML.new_element('button', {}).
                set_text('Buscar').
                element());

        document.body.appendChild(div.element());
    };
    return {
        'encabezado': encabezado,
        'productos': productos,
        'buscador': buscador
    };
})();
