//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    init: function(){
        document.addEventListener('deviceready',fn.ready,false);
    },
    ready: function(){
        //Funciones de Archivos
        $('#aEscribir').tap(fn.escribir);//Escribir
        $('#aLeer').tap(fn.init);//Leer
    },
    escribir: function(){
        archivos.textoEscritura = $('#aSend').val();
        archivos.tipo = 'escritura';
        archivos.accesoSistema();
    }
};
$(fn.init);