import { MongoDataSource } from 'apollo-datasource-mongodb';
export default class Recipes extends MongoDataSource{
  getRecipe(title) {
    return this.findOneById(title);
  }
}
