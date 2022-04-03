var URlProveedor =  'http://localhost:90/G9_20/controller/pedidos_proveedor.php?op=GetProveedor';
var URLPostProveedor= 'http://localhost:90/G9_20/controller/pedidos_proveedor.php?op=InsertProveedor';
var URLGetProveedor= 'http://localhost:90/G9_20/controller/pedidos_proveedor.php?op=GetProvedor';
var URLPUTProveedor= 'http://localhost:90/G9_20/controller/pedidos_proveedor.php?op=UpdateProvedor';
var URLDeleteProveedor= 'http://localhost:90/G9_20/controller/pedidos_proveedor.php?op=DeleteProvedor';


$(document).ready(function(){
cargarproveedores();
});

function cargarproveedores(){
    $.ajax({
        URL:URlProveedor,
        type:"GET",
        datatype:"JSON",
        success: function(reponse){
            var MiItems= reponse;
            var Valores='';  
        
            for(i=0; i<MiItems.length; i++){
             Valores += '<tr>' +
             '<td>'+MiItems[i].ID +'</td>'+
             '<td>'+MiItems[i].Nombre +'</td>'+
             '<td>'+MiItems[i].Detalle +'</td>'+
             '<td>'+MiItems[i].Direccion +'</td>'+
             '<td>'+MiItems[i].RTN +'</td>'+
             '<td>'+MiItems[i].CONTACTO +'</td>'+
             '<td>'+MiItems[i].ESTADO +'</td>'+
             '</td>'+
             '<button class="btn btn-info" onclick="CargarProveedor(' + MiItems[i].ID +')">Editar</button>'+
             '<button class="btn btn-danger" id="btneliminar" onclick="EliminarProveedor()">Eliminar</button>'+

             '</td>'+
            '</tr>';
            $('.Proveedores').html(Valores);
            }
        }
    });

}
        Detalle:$('#Detalle').val(),

function AgregarProveedor(){
    var datosproveedor={
        Nombre:$('#Nombre').val(),
        Direccion:$('#Direccion').val(),
        RTN:$('#RTN').val(),
        CONTACTO:$('#CONTACTO').val(),
        ESTADO:$('#ESTADO').val()
    };
     var datosproveedorjson = JSON.stringify(datosproveedor);
     $.ajax({
        URL:URLPostProveedor,
        type:"POST",
        data: datosproveedorjson,
        dataType:"JSON",
        contenttype:'aplication/json',
        success: function(reponse){
            console.log(reponse);
        },
        error:function(){
            alert('Error al crear Proveedor')
        }
     });
     alert('Proveedor Agregado');
}

function CargarProveedor(idproveedor){
    var datosproveedor={
        ID:idproveedor
    };
    var datosproveedorjson = JSON.stringify(datosproveedor);

     $.ajax({
        URL:URLGetProveedor,
        type:"POST",
        data: datosproveedorjson,
        dataType:"JSON",
        contenttype:'aplication/json',
        success: function(response){
            var MiItems= Response;
            $('#Nombre').val(MiItems[0].Nombre);
            $('#Direccion').val(MiItems[0].Direccion);
            $('#RTN').val(MiItems[0].RTN);
            $('#CONTACTO').val(MiItems[0].CONTACTO);
            $('#ESTADO').val(MiItems[0].ESTADO);
         var btnactualizar ='<input type="submit" id="btnalerta" onclick="ActualizarProveedor()" value="alerta" class="btn btn-secondary">';
            $('#btnproveedor').html(btnactualizar);
        }
    });
}

function ActualizarProveedor(idproveedor){
    var datosproveedor={
        Nombre:$('#Nombre').val(),
        Direccion:$('#Direccion').val(),
        RTN:$('#RTN').val(),
        CONTACTO:$('#CONTACTO').val(),
        ESTADO:$('#ESTADO').val(),
        ID:$(idproveedor)
    };
     var datosproveedorjson = JSON.stringify(datosproveedor);
     $.ajax({
        URL:URLPostProveedor,
        type:"PUT",
        data: datosproveedorjson,
        dataType:"JSON",
        contenttype:'aplication/json',
        success: function(reponse){
            console.log(reponse);
        },
        error:function(){
            alert('Proveedor Actualizado')
        }
     });
}

function EliminarProveedor(idproveedor){
    var datosproveedor={
        Nombre:$('#Nombre').val(),
        Direccion:$('#Direccion').val(),
        RTN:$('#RTN').val(),
        CONTACTO:$('#CONTACTO').val(),
        ESTADO:$('#ESTADO').val(),
        ID:$(idproveedor)
    };
     var datosproveedorjson = JSON.stringify(datosproveedor);
     $.ajax({
        URL:URLPostProveedor,
        type:"PUT",
        data: datosproveedorjson,
        dataType:"JSON",
        contenttype:'aplication/json',
        success: function(reponse){
            console.log(reponse);
        },
        error:function(){
            alert('Proveedor Eliminado')
        }
     });
}