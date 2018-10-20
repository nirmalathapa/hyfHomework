CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `ratings`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `movie_ratings` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `ratings_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_ratings_id` FOREIGN KEY (`ratings_id`) REFERENCES `ratings` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `favorite_movies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(10) unsigned NOT NULL,
  `movies_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `aaaafk_movies_id` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `genres`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE If NOT EXISTS `movie_genres` (
  `id` int(10) unsigned NOT NULL,
  `movies_id` int(10) unsigned NOT NULL,
  `genres_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`movies_id`, `genres_id`),
  CONSTRAINT `fk_movies_id` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_genres_id` FOREIGN KEY (`genres_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Users
insert into user (id, name, email) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu');
insert into user (id, name, email) values (2, 'Bikky Nestlington', 'bikki@gmain.com');
insert into user (id, name, email) values (3, 'Lyra Book', 'lyrab@hotmail.org');
insert into user (id, name, email) values (4, 'Churn Walker', 'churn@yahoo.com');
insert into user (id, name, email) values (5, 'Ardent Vangard', 'ardent@standford.edu');
insert into user (id, name, email) values (6, 'Vox Semin', 'vox@gmail.com');

-- Ratings
insert into ratings (id, movie_ratings) values (1, 8);
insert into ratings (id, movie_ratings) values (2, 7);
insert into ratings (id, movie_ratings) values (3, 6);
insert into ratings (id, movie_ratings) values (4, 9);
insert into ratings (id, movie_ratings) values (5, 7);

-- Movies
insert into movies (id, name, ratings_id) values (1, 'shutter island', 1);
insert into movies (id, name, ratings_id) values (2, 'Ajin', 2);
insert into movies (id, name, ratings_id) values (3, 'Inception', 3);
insert into movies (id, name, ratings_id) values (4, 'Million Dollar Baby', 4);
insert into movies (id, name, ratings_id) values (5, 'Freedom Writer', 5);

-- Favourite Movies
insert into favorite_movies (id, user_id, movies_id) values (1, 1, 1);
insert into favorite_movies (id, user_id, movies_id) values (2, 2, 2);
insert into favorite_movies (id, user_id, movies_id) values (3, 3, 3);
insert into favorite_movies (id, user_id, movies_id) values (4, 4, 4);
insert into favorite_movies (id, user_id, movies_id) values (5, 5, 5);

-- Genres
insert into genres (id, name) values (1, 'thriller');
insert into genres (id, name) values (2, 'Anime');
insert into genres (id, name) values (3, 'Sci-Fi');
insert into genres (id, name) values (4, 'Action');
insert into genres (id, name) values (5, 'Comedy');

-- Movie Genres
insert into movie_genres (id, movies_id, genres_id) values (1, 1, 1);
insert into movie_genres (id, movies_id, genres_id) values (2, 2, 2);
insert into movie_genres (id, movies_id, genres_id) values (3, 3, 3);
insert into movie_genres (id, movies_id, genres_id) values (4, 4, 4);
insert into movie_genres (id, movies_id, genres_id) values (5, 5, 5);


