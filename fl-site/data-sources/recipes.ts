import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';

interface RecipeDocument {
  _id: ObjectId
  username: string
  password: string
  email: string
}

export default class Recipes extends MongoDataSource<RecipeDocument> {
  getUser(title: string): Promise<RecipeDocument> {
    return this.findOneById(title);
  }
}
