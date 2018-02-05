class NumericoHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static moeda(valor) {
		
        var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(valor);
    }
	 static real(valor) {
		 
        var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(valor);
    }
	static dolar(valor) {
		
       var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'currency', currencyDisplay:'name'  , currency: 'USD',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(x);
	}
	static realExtenso(valor) {
		
        return 'Não implementado';
	}
	
	static toNumber(valor) {
		// Recebe um numero no formato 5.778.999,01 ==> 5778999.01
		// Se não receber um numero retorna NaN
		if (!isNaN(valor)){ return valor;}else{
		valor = valor.replace('.','');
		valor = valor.replace(',','.');
		return parseFloat(valor);	}	
    }
	
    
}


/*

$scope.valor = '0';
	$scope.valorFormatado = function() {
		var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format($scope.valor);
    };
	});
	
	app.filter('real', function() {
    return function(x) {
        var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(x);
    };
   	});	
	
	app.filter('dolar', function() {
	 return function(x) {
        var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'currency', currencyDisplay:'name'  , currency: 'USD',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(x);
    };
   	});	
	
	app.filter('dolar2', function() {
	 return function(x) {
        var brlFormato = new Intl.NumberFormat('en-US', { style: 'currency', currencyDisplay:'name'  , currency: 'USD',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(x);
    };
   	});	
	
	app.filter('real2', function() {
    return function(x) {
        var brlFormato = new Intl.NumberFormat('pt-BR', { style: 'currency', currencyDisplay:'code'  , currency: 'BRL',  minimumFractionDigits: 2,   maximumFractionDigits: 2 });
        return brlFormato.format(x);
    };
   	});*/