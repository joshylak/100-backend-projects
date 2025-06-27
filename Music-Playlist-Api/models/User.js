import { Model } from 'objection';

class User extends Model {
  static tableName = 'users';

  static relationMappings = {
    playlists: {
      relation: Model.HasManyRelation,
      modelClass: 'Playlist',
      join: {
        from: 'users.id',
        to: 'playlists.user_id',
      },
    },
  };
}

export default User;
