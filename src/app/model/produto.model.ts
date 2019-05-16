export class Produto {
  author : Author;
  itens: Itens;
}

export class Author {
  name: String;
  lastname: String;
}

export class Itens {
  id: String;
  title: String;
  price: Number;
  pictures: Imagens[];
  condition: String;
  sold_quantity: Number;
  free_shipping: String;
  descricao: Descricao[];
}

export class Imagens {
  id: String;
  max_size: String;
  quality: String;
  secure_url: String;
  size: String;
  url: String;
}

export class Descricao {
  created: String;
  id: String;
  plain_text: String;
}
