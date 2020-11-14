import composeWithMongoose from 'graphql-compose-mongoose'
import mongoose from 'mongoose'

const authorSchema = new Schema({
  authorId: String,
  name: String,
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const Authors = mongoose.model('Authors', authorSchema, 'Authors');

const AuthorsTC = composeWithMongoose(Authors);

const authorQuery = {
  authorById: AuthorsTC.getResolver('findById'),
  authorByIds: AuthorsTC.getResolver('findByIds'),
  authorOne: AuthorsTC.getResolver('findOne'),
  authorMany: AuthorsTC.getResolver('findMany'),
  authorCount: AuthorsTC.getResolver('count'),
  authorConnection: AuthorsTC.getResolver('connection'),
  authorPagination: AuthorsTC.getResolver('pagination'),
}
const authorMutation = {
  authorCreateOne: AuthorsTC.getResolver('createOne'),
  authorCreateMany: AuthorsTC.getResolver('createMany'),
  authorUpdateById: AuthorsTC.getResolver('updateById'),
  authorUpdateOne: AuthorsTC.getResolver('updateOne'),
  authorUpdateMany: AuthorsTC.getResolver('updateMany'),
  authorRemoveById: AuthorsTC.getResolver('removeById'),
  authorRemoveOne: AuthorsTC.getResolver('removeOne'),
  authorRemoveMany: AuthorsTC.getResolver('removeMany'),
};

export default { authorQuery, authorMutation, AuthorsTC }
