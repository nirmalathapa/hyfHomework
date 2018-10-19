CREATE TABLE `artists` (
	`artist_id` INT(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`artist_name` varchar(255) NOT NULL,
	`album_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into artists(artist_id, artist_name, album_name) values(1, 'Orella Raccio', 'Savannah deer');
insert into artists(artist_id, artist_name, album_name) values(2, 'Blake Dreakin', 'Black rhinoceros');
insert into artists(artist_id, artist_name, album_name) values(3, 'Dolph Mendus', 'Bunting');
insert into artists(artist_id, artist_name, album_name) values(4, 'Freddi', 'frilled');

CREATE TABLE `albums` (
	`album_id` INT(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`album_name` varchar(255) NOT NULL,
	`realese_date` DATE NOT NULL,
	`artist_id` INT(11) unsigned NOT NULL,
  CONSTRAINT `fk_artist` FOREIGN KEY (`artist_id`) REFERENCES `artists`(`artist_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into albums(album_id, album_name, realese_date, artist_id) values(1, 'crazy world', '2018-10-09', 1);
insert into albums(album_id, album_name, realese_date, artist_id) values(2, 'Hot chilli peppers', '2015-10-09', 2);

CREATE TABLE `song_tracks` (
  `id` INT(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`song_title` varchar(255) NOT NULL,
	`genre` varchar(255) NOT NULL,
	`artist_id` INT(11) NOT NULL,
	`album_id` INT(11) unsigned NOT NULL,
    CONSTRAINT `fk_album` FOREIGN KEY (`album_id`) REFERENCES `albums`(`album_id`) ON DELETE CASCADE    
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `genres` (
	`id` INT(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`title` varchar(255) NOT NULL,
	`song_id` INT(11) unsigned NOT NULL,
	CONSTRAINT `fk_song_id` FOREIGN KEY (`song_id`) REFERENCES `song_tracks` (`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




