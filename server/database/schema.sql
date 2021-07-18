CREATE TABLE IF NOT EXISTS game_data (
  name VARCHAR(10) NOT NULL PRIMARY KEY ASC,
  score INT(11) NULL DEFAULT 0
); 

INSERT OR IGNORE INTO game_data (name) VALUES ("robot");
INSERT OR IGNORE INTO game_data (name) VALUES ("user");