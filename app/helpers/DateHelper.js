class DateHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    static dataParaTexto(data) {
		
		let digFormato = new Intl.NumberFormat('pt-BR', { style: 'decimal',  minimumIntegerDigits: 2 });
		let mes = (data.getMonth()+1);
		return `${digFormato.format(data.getDate())}/${digFormato.format(mes)}/${data.getFullYear()}`;
    }
	
	static textoParaData(texto) {
		
		//alert(texto + ' ==== ' + texto.length)
	    if(!/\d{2}[/]\d{2}[/]\d{4}/.test(texto)) 
            throw new Error('Deve estar no formato dd/mm/aaaa');
		let dia = texto.substring(0,2);
		let mes = texto.substring(3,5);
		let ano = texto.substring(6,11);
		return new Date(ano,mes-1,dia);   	
    }
		
	static  dataNumerica(texto) {
	    var d = this.textoParaData(texto);
    	var n = d.getTime();
		alert(n);
    	return n
}
    
}