
var app = angular.module('extratoApp', []);

app.controller('extratoCtrl', function($scope) {
    
	$scope.periodo = "";
	$scope.extrato;      
	$scope.infoExtrato =  new Array();
		
	$scope.data = new Date();
	$scope.valor;
	$scope.descricao = "";
	$scope.mensagem  = "";
		
	$scope.formatFinal   = "0,00";
	$scope.formatInicial = "0,00";
   	$scope.formatDebito  = "0,00";
	$scope.formatCredito = "0,00";
		
	//---------------------------------------------------------------------------
	//-----------            Incluir e apagar valores         ------------------- 
	//--------------------------------------------------------------------------- 
	
	$scope.init = function() {	
		 if (localStorage.getItem("valor") !== null ){
		    //var foi = JSON.parse(localStorage.getItem("valor"));
			 $scope.infoExtrato =JSON.parse(localStorage.getItem("valor"));
			 $scope.atualizaValores();
			//$scope.infoExtrato = localStorage.getItem("text1");
		}
		
	} 
	
	$scope.incluir = function(tipo) {
		
		$scope.mensagem = "";
		if ($scope.validaValor(tipo)){
			$scope.infoExtrato.push(new $scope.lancamento());
			$scope.ordenarLista();
			$scope.atualizaValores();
			$scope.descricao = "";
		}
		$scope.valor = "";
		$scope.salvar();
	}
	
	$scope.apagar = function (linha) {
		  
		  let numItens = $scope.infoExtrato.length;
		  let leftPart = $scope.infoExtrato.slice(0, linha);
		  let rigthPart = $scope.infoExtrato.slice(linha+1, numItens);
		  $scope.infoExtrato = leftPart.concat(rigthPart); 
		  $scope.atualizaValores();
		  $scope.salvar();
	 }
	
	$scope.ordenarLista= function(){
		
		$scope.infoExtrato.sort(function(a,b) {
				let data_1 = DateHelper.textoParaData(a.data);	
				let data_2 = DateHelper.textoParaData(b.data);	 
				if(data_1 < data_2) return -1;
				if(data_1 > data_2) return 1;
				return 0;
			 });	
	}
		
	$scope.lancamento = function () {
		
		this.data = DateHelper.dataParaTexto($scope.data);
    	this.descricao = ($scope.descricao ==="") ? "Despesas" : $scope.descricao;
		this.valor = ($scope.valor === undefined) ? 0 : $scope.valor;
    }
			
	$scope.validaValor = function(tipo){
		
		if ($scope.valor === undefined || isNaN($scope.valor)|| $scope.valor==="" ||       		$scope.valor===0){
			$scope.mensagem = "O valor não é válido";
			return false;
		}
		else
		{
			if (tipo =='Credito') {
				$scope.valor = ($scope.valor < 0) ? $scope.valor * -1: $scope.valor;
			}else{
				$scope.valor = ($scope.valor > 0) ? $scope.valor * -1: $scope.valor;
			}
			return true;
		}	
	 }
		 
	$scope.atualizaValores = function () {
		
		$scope.extrato =  new Array();
		$scope.saldo = 0;
		let valorDebito =0;
		let valorCredito=0;
		let valorNovo;
		//------ Calcular Saldo e o valor de débitos e creditos ----------
		for (i=0; i < $scope.infoExtrato.length; i++) {
			
			valorNovo = $scope.infoExtrato[i].valor;
			(valorNovo < 0) ? 	valorDebito += valorNovo : valorCredito += valorNovo;
			$scope.extrato.push(new $scope.criaExtrato(i));
		} 
		$scope.formatDebito = NumericoHelper.moeda(valorDebito);
		$scope.formatCredito = NumericoHelper.moeda(valorCredito);
		$scope.formatFinal = NumericoHelper.moeda($scope.saldo);	
	}
	
	$scope.criaExtrato = function (i) {
		
		
		valorAtual = $scope.infoExtrato[i].valor;
		$scope.saldo = $scope.saldo + valorAtual;
		
		this.credito = "0,00";
		this.debito = "0,00";
		(valorAtual < 0) ? this.debito = NumericoHelper.moeda(valorAtual) : this.credito =NumericoHelper.moeda(valorAtual) ;
		this.data = $scope.infoExtrato[i].data;
    	this.descricao = $scope.infoExtrato[i].descricao ;
		this.saldo=NumericoHelper.moeda($scope.saldo);
	 }  
		       
	$scope.salvar = function() {
		var json = angular.toJson( $scope.infoExtrato );
		localStorage.setItem("valor", json);
	} 
	
	
		   
    // ----------- Fim do script        -------------------------------------------	
});

 //-------------------------------------------------------------------------------- 
	/*$scope.init = function() {	  		
		if (localStorage.getItem("token") == null ){
			window.location.assign("index.html");			
		} else {
			$scope.dadosUsuario();
			$scope.listaAmigo();	
		} 
	} 
	$scope.logout = function() {	
		localStorage.removeItem("token");
		window.location.assign("index.html");	
	} */
