const express = require('express');
const cors = require('cors');

const{sequelize, Sequelize} = require('./models');

const models=require('./models');
const { json } = require('express/lib/response');
const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let produto=models.Produto;
let compra=models.Compra;
let itemCompra=models.ItemCompra;
let itempedido=models.ItemPedido;
let pedido=models.Pedido;
let servico=models.Servico;

app.get('/', function(req,res){
    res.send('Olá, Mundo!!!')
});

app.get('/produtos',async(req,res)=>{
    await protudo.create({
        nome: "Acessorios e Perifericos!",
        descricao: "Sempre na atualidade!",
        createAt: new Date(),
        updateAt: new Date()
    });
    
});
app.get('/produtos',async(req,res)=>{
    await protudo.create({
        nome: "Placa Mãe Didave-5009",
        descricao: "Placa mãe feita para jogos e programas pesados.",
        createAt: new Date(),
        updateAt: new Date()
    });
    
});
app.get('/produtos',async(req,res)=>{
    await protudo.create({
        nome: "Memoria Ram Divinal",
        descricao: "Memoria que nunca da Pau!.",
        createAt: new Date(),
        updateAt: new Date()
    });
    
});
res.send('Produtos atualizados sempre!');

app.post('/servicos', async(req,res) =>{
    await servico.create(
       req.body
    ).then(function(){
        return res.json({
            error: false,
            message:"Serviço criado com sucesso!" 
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            massege: "Foi impossivel se conectar"
        })
    });
    
});


app.get('/clientes', async(req,res)=>{
    await cliente.create({
        nome:"Arlindo Souza Pinto",
        endereco:"Av. das Palmilhas",
        cidade:"Jutuacú",
        uf:"RR",
        nascimento:"01/01/1980",
        clienteDesde:"30/06/1995",
        createAt: new Date(),
        createAt: new Date()
    });
    
});
app.get('/clientes', async(req,res)=>{
    await cliente.create({
        nome:"Juvernau Adalberto",
        endereco:"Av. dos Pepinos",
        cidade:"Miraseu",
        uf:"AC",
        nascimento:"05/06/1990",
        clienteDesde:"29/08/1999",
        createAt: new Date(),
        createAt: new Date()
    });
    
});
app.get('/clientes', async(req,res)=>{
    await cliente.create({
        nome:"juvenil das Florestas",
        endereco:"Rua Candito de Abreu",
        cidade:"Bartolomeu",
        uf:"MA",
        nascimento:"16/02/1985",
        clienteDesde:"28/09/1997",
        createAt: new Date(),
        createAt: new Date()
    });
    
});
app.get('/clientes', async(req,res)=>{
    await cliente.create({
        nome:"Blebeu de Carvalho",
        endereco:"Rua Jaquirandá",
        cidade:"Pompeia",
        uf:"RN",
        nascimento:"10/07/1994",
        clienteDesde:"06/09/1993",
        createAt: new Date(),
        createAt: new Date()
    });
    
});

res.send('Seja bem-vindo a ServiceTi!!!')

app.get('/produtos', function(req,res){
    res.send('Selecione nossos produtos!')
});

app.post('/compras', async(req,res) =>{
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Compra realizada com sucesso!."
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            massege: "Foi impossivel realizar a compra!."
        })
    });
        
    });
    app.post('/itemCompras', async(req,res) =>{
        await itemCompra.create(
            req.body
        ).then(function(){
            return res.json({
                error: false,
                message: "Veja o seu item!."
            })
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                massege: "Não foi possivel encontrar o item!."
            })
        });
            
        });
    
app.get('/compras', function(req,res){
    await compra.create({
        nome: "Memoria Ram",
        descricao:"Para melhor seu computador rodar",
        valor: "R$800,00",
        createAt: new Date(),
        createAt: new Date()
        
    });
});
res.send('Compre sempre conosco!!')

app.get('/listasproduto', async(req,res)=>{
    await produto.findAll({
        order: [['nome', 'ASC']]
    }).then(function(produto){
        res.json({produtos})    
    });
});

app.get('/ofertaprodutos', async(req,res)=>{
    await produto.count('id').then(function(produtos){
        res.json({produtos});
    });
});

app.get('/produto/:id', async(req,res)=>{
    await produto.findByPk(req.params.id)
    .then(prodt =>{
        return res.json({
            error: false,
            prodt
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            massege: "Erro: codigo não encontrado."
        });
    });
});

app.get('/atualizaprodutos', async(req,res)=>{
    await produto.findByPk(1)
    .then(prodt =>{
        prodt.nome = 'Placa de video';
        prodt.descricao = 'Melhor desenpenho par seu filmes e games!.'
        prodt.save();
        return res.json({prodt});
    });
});

app.put('/atualizaproduto', async(req,res)=>{
    await produto.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Produto foi alterado com sucesso"
          })
    
    }).catch(function(error){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração."
        });
    });


app.get('/compras/:id', async(res,req)=>{
    await compra.findByPk(req.params.id,{include:[{all:true}]})
    .then(compr=>{
        return res.json({compr});
    });
});

app.get('/excluircompra/:id', async(req,res)=>{
    await compra.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            mesage: "compra excluida"
        });
    }).catch(function(error){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir sua compra."
        });
    });
});

app.get('/excluirproduto/:id', async(req,res)=>{
    await produto.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            mesage: "produto excluido"
        });
    }).catch(function(error){
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o produto."
        });
    });
});


app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        //raw: true
        order: [['nome', 'ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});
app.get('/ofertaservicos', async(req, res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});

app.get('/servico/:id', async(req,res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro código não encontrado!"
        });
    });
});

// app.get('/atualizaservico', async(req,res)=>{
//     await servico.findByPk(1)
//     .then(serv =>{
//         serv.nome = 'HTML/CSS/JS';
//         serv.descricao = 'Paginas estaticas e dinamicas estilizadas';
//         serv.save();
//         return res.json({serv});
//     });
// });
app.put('/atualizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Servico foi alterado com sucesso"
        });
    }).catch(function(error){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração."
        });
    });

    app.get('/pedidos/:id', async(req,res)=>{
        await pedido.findByPk(req.params.id,{include:[{all: true}]})
        .then(ped=>{
            return res.json({ped});
        })
    })

    app.put('/pedidos/:id/editaritem', async(req,res)=>{
        const item={
            quantidade: req.body.quantidade,
            valor: req.body.valor
        };

        if (!await pedido.findByPk(req.params.id)){
            return res.status(400).json({
                error: true,
                message: 'Pedido não encontrado.'
            });
        };

        if(!await servico.findByPk(req.body.ServicoId)){
            return res.status(400).json({
                error: true,
                message: 'serviço não foi encontrado.'
            });
        };

        await itempedido.update(item, {
            where: Sequelize.and({ServicoId: req.body.ServicoId},
                {PedidoId: req.params.id})
        }).then(function(itens){
            return res.json({
                error: false,
                massege: "Pedido foi alterado",
                itens
            });
        }).catch(function(error){
            return res.status(400).json({
                error: true,
                message: "erro, foi foi possivel encontrar."
            });
        });
    });

    app.get('/excluircliente/:id', async(req,res)=>{
        await cliente.destroy({
            where: {id: req.params.id}
        }).then(function(){
            return res.json({
                error: false,
                mesage: "cliente excluido"
            });
        }).catch(function(error){
            return res.status(400).json({
                error: true,
                message: "Erro ao excluir o cliente."
            });
        });
    });

let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor Ativo: http://localhost:3001');
});
},)