const homeController = {
  index: (req, res) => {
    let carrousel = ['/imagens/image1.jpg', '/imagens/image2.jpg', '/imagens/image3.jpg']
    let servicos = [
      {nome: 'Desenvolvimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
      {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
      {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
    ]
    let quemSomos = {
      nome: 'QUEM SOMOS',
      descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eaque, consequatur officia tempora quia harum temporibus voluptatem atque aliquid. Adipisci, debitis tempore optio omnis expedita nisi quam molestias laudantium reiciendis.'
    }
    res.render('index', {title: 'Home', listaServicos: servicos, imgsCarrousel: carrousel, sobre: quemSomos})
  },
  contato: (req, res) => {
    let {nome, email, mensagem} = req.body

    res.render('contato', {nome, email, mensagem, title: 'contato'})
  },
  newsletter: (req, res) => {
    let {emailNew} = req.query
    res.render('newsletter',{title: 'newsletter', emailNew})
  }
}

module.exports = homeController;