CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nick_name` varchar(255),
  `avatar_img` varchar(255),
  `birth_date` datetime,
  `email` varchar(255)
);

CREATE TABLE `albums` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `artist_id` int,
  `title` varchar(255),
  `date` datetime,
  `img` varchar(255)
);

CREATE TABLE `songs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `artist_id` int,
  `album_id` int,
  `name` varchar(255),
  `duration` long
);

CREATE TABLE `artists` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `img` varchar(255)
);

CREATE TABLE `playlists_join` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `name` varchar(255),
  `is_public` boolean
);

CREATE TABLE `playlists` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_playlist` int,
  `song_id` int
);

CREATE TABLE `favoris` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `artist_id` int,
  `album_id` int,
  `song_id` int
);

CREATE TABLE `admins` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int
);

ALTER TABLE `albums` ADD FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `admins` (`user_id`);

ALTER TABLE `songs` ADD FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`);

ALTER TABLE `songs` ADD FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`);

ALTER TABLE `favoris` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `favoris` ADD FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`);

ALTER TABLE `favoris` ADD FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`);

ALTER TABLE `favoris` ADD FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`);

ALTER TABLE `playlists` ADD FOREIGN KEY (`id_playlist`) REFERENCES `playlists_join` (`id`);

ALTER TABLE `playlists` ADD FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`);

ALTER TABLE `playlists_join` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
