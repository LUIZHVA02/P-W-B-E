var usuarios = {
    usuario: [
        {
            idUsuario: 1,
            nome: "Luiz Henrique Vidal Araujo",
            telefone: 5511961659165,
            cpf: 57681653133,
            senha: "dez_13/12",
            email: "luizhva@gmail.com",
            link_img_perfil: ""
        },
        {
            idUsuario: 2,
            nome: "Nicolas Vasconcelos Petri",
            telefone: 5511965161647,
            cpf: 42682188952,
            senha: "dez_03/12",
            email: "nvpetir@gmail.com",
            link_img_perfil: ""
        },
        {
            idUsuario: 3,
            nome: "Estela da Silva Menezes",
            telefone: 5511956168165,
            cpf: 65168165681,
            senha: "out_09/10",
            email: "estrelinha@gmail.com",
            link_img_perfil: ""
        },
        {
            idUsuario: 4,
            nome: "Carolina Neponucena",
            telefone: 5511916541541,
            cpf: 41961651614,
            senha: "nov_06/11",
            email: "carolcomcerteza@gmail.com",
            link_img_perfil: ""
        },
        {
            idUsuario: 5,
            nome: "Jessica Pereira dos Santos",
            telefone: 5511966116489,
            cpf: 55336952895,
            senha: "mar_26/03",
            email: "annaeelza@gmail.com",
            link_img_perfil: ""
        },
    ]
}

var enderecos = {
    endereco: [
        {
            idEndereco: 1,
            idUsuario: usuarios.usuario[0],
            cep: "06325000",
            cidade: "Carapicuíba",
            bairro: "Conjunto Habitacional Presidente Castelo Branco",
            rua: "Avenida Brasil",
            complemento: "204B bloco B",
        },
        {
            idEndereco: 2,
            idUsuario: usuarios.usuario[1],
            cep: "05325000",
            cidade: "São Paulo",
            bairro: "Parque Continental",
            rua: "Rua Alfredo Pinheiro",
            complemento: "",
        },
        {
            idEndereco: 3,
            idUsuario: usuarios.usuario[2],
            cep: "06325000",
            cidade: "Carapicuíba",
            bairro: "Conjunto Habitacional Presidente Castelo Branco",
            rua: "Avenida Brasil",
            complemento: "204B bloco B",
        },
        {
            idEndereco: 4,
            idUsuario: usuarios.usuario[3],
            cep: "04325000",
            cidade: "São Paulo",
            bairro: "Vila do Encontro",
            rua: "Avenida Engenheiro Armando de Arruda Pereira",
            complemento: "",
        },
        {
            idEndereco: 5,
            idUsuario: usuarios.usuario[4],
            cep: "03325000",
            cidade: "São Paulo",
            bairro: "Vila Santo Estevão",
            rua: "Rua Aguapeí",
            complemento: "",
        }
    ]
}

var categorias = {
    categoria: [
        {
            idCategoria: 1,
            nome: "Pizzas",
            subCategoria: "Salgadas",
            qntd_produtos: 2,
        },
        {
            idCategoria: 2,
            nome: "Pizzas",
            subCategoria: "Doces",
            qntd_produtos: 2,
        },
        {
            idCategoria: 3,
            nome: "Pizzas Brotinho",
            subCategoria: "Salgadas",
            qntd_produtos: 2,
        },
        {
            idCategoria: 4,
            nome: "Pizzas Brotinho",
            subCategoria: "Doces",
            qntd_produtos: 2,
        },
        {
            idCategoria: 5,
            nome: "Sobremesas",
            subCategoria: "Maiores",
            qntd_produtos: 5,
        },
        {
            idCategoria: 6,
            nome: "Sobremesas",
            subCategoria: "Menores",
            qntd_produtos: 5,
        },
        {
            idCategoria: 7,
            nome: "Bebidas",
            subCategoria: "3 Litros",
            qntd_produtos: 9,
        },
        {
            idCategoria: 8,
            nome: "Bebidas",
            subCategoria: "2 Litros",
            qntd_produtos: 9,
        },
        {
            idCategoria: 9,
            nome: "Bebidas",
            subCategoria: "1 Litro",
            qntd_produtos: 8,
        },
        {
            idCategoria: 10,
            nome: "Bebidas",
            subCategoria: "600 Mililitros",
            qntd_produtos: 9,
        },
    ]
}

var produtos = {
    produto: [
        {
            idProduto: 1,
            idCategoria: categorias.categoria[0],
            nome: "Pizza de Calabreza com Queijo",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: 16.99,
            link_img_produtos: "", 
        },
        {
            idProduto: 1,
            idCategoria: categorias.categoria[0],
            nome: "Pizza de Chocolate com Morango",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: 19.99,
            link_img_produtos: "", 
        },
        {
            idProduto: 2,
            idCategoria: categorias.categoria[1],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 2,
            idCategoria: categorias.categoria[3],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 3,
            idCategoria: categorias.categoria[4],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 6,
            idCategoria: categorias.categoria[5],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 7,
            idCategoria: categorias.categoria[6],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 8,
            idCategoria: categorias.categoria[7],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 9,
            idCategoria: categorias.categoria[8],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        {
            idProduto: 10,
            idCategoria: categorias.categoria[9],
            nome: "",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            preco: ,
            link_img_produtos: "", 
        },
        
    ]
}

module.exports = {
    usuarios,
    enderecos,
    categorias
 }