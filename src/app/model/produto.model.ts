export class Produto {
  author : Author;
  itens: Itens;
}

export class Author {
  name: String;
  lastname: String
}

export class Itens {
  id: String;
  title: String;
  price: Price;
  picture: String;
  condition: String;
  free_shipping: String;
  descricao: String;
}

export class Price {
  currency: String;
  amount: Number;
  decimals: Number;
}
