var HTML = (function (){

    _table = function(_ths, _tds){
        var nueva_tabla = document.createElement('table');
        var nuevo_thead = document.createElement('thead');
        nueva_tabla.appendChild(nuevo_thead);
        var nuevo_tr = document.createElement('tr');
        nuevo_thead.appendChild(nuevo_tr);

        for (var i = 0; i < _ths.length; i++){
            var nuevo_td = document.createElement('th');
            nuevo_td.textContent = _ths[i];
            nuevo_tr.appendChild(nuevo_td);
        }

        nuevo_tbody = document.createElement('tbody');
        nueva_tabla.appendChild(nuevo_tbody);

        for (var i = 0; i < _tds.length; i++){
            var nuevo_tr = document.createElement('tr');

            for(var j = 0; j < _tds[i].length; j++){
                var nuevo_td = document.createElement('td');
                nuevo_td.textContent = _tds[i][j];
                nuevo_tr.appendChild(nuevo_td);
            }
            nuevo_tbody.appendChild(nuevo_tr);
        }
        return nueva_tabla;
    };

    var _envolver = function(obj){
        var _estado = obj;
        var _envoltura = {
            'set_id': function(_id){
                _estado.setAttribute('id', _id);
                return _envoltura;
            },
            'set_text': function(_text){
                _estado.textContent = _text;
                return _envoltura;
            },
            'set_attribute': function(_attribute, value){
                _estado.setAttribute(_attribute, value);
                return _envoltura;
            },
            'add_class': function(_class){
                _estado.classList.add(_class);
                return _envoltura;
            },
            'append_child': function(_child){
                _estado.appendChild(_child);
                return _envoltura;
            },
            'element': function(){
                return _estado;
            },
        };
        return _envoltura;
    };

    var _new_element = function(_etiqueta, _obj_atributos){
        var nuevo_elemento = document.createElement(_etiqueta);
        for(var atributo in  _obj_atributos)
            nuevo_elemento.setAttribute(atributo, _obj_atributos[atributo]);
        return _envolver(nuevo_elemento);
    };


    return {
        "table": _table,
        'new_element': _new_element,
        'envolver': _envolver
    };
})();
