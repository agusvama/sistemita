//generar una tabla
var GUI = (function(){

    var productos = function(){
        var tabla = HTML.table(['Nombre', 'Descripción', 'Precio'], 
                [['Tenis', 'nuevos, color azul', '500']]);
        tabla = HTML.envolver(tabla);
        document.body.appendChild(tabla.set_attribute('border', '1').
                add_class('pure-table').
                add_class('pure-table-horizontal').
                element());
    };

    var encabezado = function(){
        document.body.appendChild(HTML.new_element('h2', {}).
                set_text('Listado de productos').
                element());
    };

    var buscador = function(){
        var div = HTML.new_element('div', {'class': 'pure-g'});

        var b1 = HTML.new_element('div', {'class': 'pure-u-1-2'});
        b1.append_child(HTML.new_element('label', {}).
                set_text('Nombre').
                add_class('pure-u-1-5').
                element());

        b1.append_child(HTML.new_element('input', {'type': 'text'}).
               set_attribute('placeholder', 'cosas...') .
               add_class('pure-u-1-2').
               element());

        div.append_child(b1.element());

        var b2 = HTML.new_element('div', {'class': 'pure-u-1-2'});
        b2.append_child(HTML.new_element('input', {'type': 'checkbox'}).
                add_class('pure-u-1-12').
                element());

        b2.append_child(HTML.new_element('label', {}).
                set_text('Sólo ofertas').
                add_class('pure-u-1-5').
                element());

        var icon_search = HTML.new_element('i', {'class': 'fa fa-search'}).element();
        b2.append_child(HTML.new_element('button', {}).
                add_class('pure-button').
                add_class('pure-u-1-3').
                set_text('Buscar ').
                append_child(icon_search).
                element());

        div.append_child(b2.element());
        
        document.body.appendChild(div.element());
    };
    return {
        'encabezado': encabezado,
        'productos': productos,
        'buscador': buscador
    };
})();
