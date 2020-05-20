var faker = require('faker');
var database =  {products: [], customerDomain: []};

for(var i=1; i<=10; i++){
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: 'https://source.unsplash.com/1600x900/?product',
    quantity: faker.random.number()
  });
  database.customerDomain.push({
    customerDomainId: i,
    customerDomainDesc: faker.lorem.sentences()
  })
}
console.log(JSON.stringify(database));
