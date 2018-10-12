CREATE TABLE IF NOT EXISTS class (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL, 
    begin_date DATE,
    end_date DATE,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DESCRIBE student;

CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY fk_class(id)
    REFERENCES class (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE student ALTER COLUMN phone VARCHAR(255) NOT NULL;

INSERT INTO student(id, name, email, phone, class_id) VALUES(1, 'Lyra Keith', 'lyra@gmail.com', '232-319-4239', 1);
INSERT INTO student(id, name, email, phone, class_id) VALUES(2, 'Churn Walker', 'churn23@gmail.com', '532-319-4237', 2);

INSERT INTO class(id, name, begin_date, end_date) VALUES(1, 'html', '2018-01-12', '2018-03-15');
INSERT INTO class(id, name, begin_date, end_date) VALUES(2, 'css', '2018-03-25', '2018-05-15');


