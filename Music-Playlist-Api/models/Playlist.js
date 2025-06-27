import { Model } from 'objection';

class Playlist extends Model {
  static tableName = 'playlists';

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: 'User', // No extension, no ./ prefix
      join: {
        from: 'playlists.user_id',
        to: 'users.id',
      },
    },
    songs: {
      relation: Model.ManyToManyRelation,
      modelClass: 'Song',
      join: {
        from: 'playlists.id',
        through: {
          from: 'playlist_songs.playlist_id',
          to: 'playlist_songs.song_id',
        },
        to: 'songs.id',
      },
    },
  };
}

export default Playlist;
