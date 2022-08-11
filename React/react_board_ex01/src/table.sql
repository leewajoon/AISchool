CREATE TABLE `board_tbl` (
  `BOARD_NUM` int NOT NULL AUTO_INCREMENT,
  `BOARD_WRITER` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `BOARD_TITLE` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `BOARD_CONTENT` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `BOARD_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`BOARD_NUM`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;