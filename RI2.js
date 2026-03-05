function Telefone(ddd, numero){
    this.ddd = ddd
    this.numero = numero

    this.getDDD = function(){
        return this.ddd
    }
    this.getNumero = function(){
        return this.numero
    }

    this.setDDD = function(novoDDD){
        this.ddd=novoDDD
    }
    this.setNumero = function(novoNum){
        this.numero=novoNum
    }

    this.getDescricao = function(){
        return `
        Telefone:
        DDD: ${this.getDDD()}
        Número: ${this.getNumero()}
        `
    }
}

function Endereco(rua, numero, cidade, estado){
    this.rua=rua
    this.numero=numero
    this.cidade=cidade
    this.estado=estado

    this.getRua = function(){
        return this.rua
    }
    this.getRuaUpper = function(){
        return this.rua.toUpperCase()
    }
    this.getRuaLower = function(){
        return this.rua.toLowerCase()
    }
    
    this.getNumero = function(){
        return this.numero
    }

    this.getCidade = function(){
        return this.cidade
    }
    this.getCidadeUpper = function(){
        return this.cidade.toUpperCase()
    }
    this.getCidadeLower = function(){
        return this.cidade.toLowerCase()
    }

    this.getEstado = function(){
        return this.estado
    }
    this.getEstadoUpper = function(){
        return this.estado.toUpperCase()
    }
    this.getEstadoLower = function(){
        return this.estado.toLowerCase()
    }

    this.setRua = function(rua){
        this.rua=rua
    }
    this.setNum = function(num){
        this.numero=num
    }
    this.setCidade = function(cidade){
        this.cidade=cidade
    }
    this.setEstado = function(estado){
        this.estado=estado
    }

    this.getDescricao = function(){
        return `
        Endereço:
        Rua: ${this.getRua()}
        Número: ${this.getNumero()}
        Cidade: ${this.getCidade()}
        Estado: ${this.getEstado()}
        `
    }
}

function Cliente(nome, telefone, email, endereco){
    this.nome=nome
    this.telefone=telefone
    this.email=email
    this.endereco=endereco

    this.getNome = function(){
        return this.nome
    }
    this.getNomeUpper = function(){
        return this.nome.toUpperCase()
    }
    this.getNomeLower = function(){
        return this.nome.toLowerCase()
    }

    this.getTelefone = function(){
        return this.telefone
    }

    this.getEmail = function(){
        return this.email
    }
    this.getEmailUpper = function(){
        return this.email.toUpperCase()
    }
    this.getEmailLower = function(){
        return this.email.toLowerCase()
    }

    this.setNome = function(nome){
        this.nome = nome
    }
    this.setEmail = function(email){
        this.email=email
    }

    this.getDescricao = function(){
        return `
        ---------------
        Informações do Cliente:
        ${this.getNome()}
        ---------------
        ---------------
        ${this.telefone.getDescricao()}
        ---------------
        ${this.endereco.getDescricao()}
        ---------------
        `
    }
}

let telefone1 = new Telefone('12', '997544578')
let endereco1 = new Endereco('Florencio Bernardes', '18', 'Guaratingueta', 'São Paulo')
let cliente1 = new Cliente('Joao', telefone1, 'joao@gmail.com', endereco1)

console.log(cliente1.getDescricao())

let telefone2 = new Telefone('12', '966584858')
let endereco2 = new Endereco('Av. Getulio Vargas', '550', 'Jacareí', 'São Paulo')
let cliente2 = new Cliente('Maria Julia', telefone2, 'mjulia@gmail.com', endereco2)

let telefone3 = new Telefone('11', '95869321')
let endereco3 = new Endereco('Marcondes vieira', '115', 'Belo Horizonte', 'Belo Horizonte')
let cliente3 = new Cliente('André Cardos', telefone3, 'cardosoandre@hotmail.com', endereco3)

let telefone4 = new Telefone('12', '95869321')
let endereco4 = new Endereco('Breno de Moura', '546', 'São José dos Campos', 'São Paulo')
let cliente4 = new Cliente('Manoela de Souza', telefone4, 'manosouzaela@gmail.com', endereco4)

let lista = [cliente1, cliente2, cliente3, cliente4]


let ordenados = lista.sort((a,b) => a.getNomeLower().localeCompare(b.getNomeLower()))

let nomes = []
for(let i = 0; i<ordenados.length; i++){
    nomes[i] = ordenados[i].getNome()
}

console.log('Ordenada:' + nomes)