-- phpMyAdmin SQL Dump
-- version 4.0.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 19 2015 г., 01:16
-- Версия сервера: 5.5.38-log
-- Версия PHP: 5.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `cognitive_new`
--

-- --------------------------------------------------------

--
-- Структура таблицы `EDUCATION`
--

CREATE TABLE IF NOT EXISTS `EDUCATION` (
  `eduid` int(11) NOT NULL AUTO_INCREMENT,
  `manid` int(11) NOT NULL,
  `eduname` varchar(256) NOT NULL,
  PRIMARY KEY (`eduid`),
  UNIQUE KEY `manid_2` (`manid`),
  KEY `manid` (`manid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `EDUCATION`
--

INSERT INTO `EDUCATION` (`eduid`, `manid`, `eduname`) VALUES
(1, 1, 'Специалист'),
(2, 2, 'Магистр'),
(3, 3, 'Среднее'),
(4, 4, 'Специалист'),
(5, 5, 'Бакалавр');

-- --------------------------------------------------------

--
-- Структура таблицы `MAN`
--

CREATE TABLE IF NOT EXISTS `MAN` (
  `manid` int(11) NOT NULL AUTO_INCREMENT,
  `manname` varchar(256) NOT NULL,
  PRIMARY KEY (`manid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `MAN`
--

INSERT INTO `MAN` (`manid`, `manname`) VALUES
(1, 'Иванов'),
(2, 'Петров'),
(3, 'Сидоров'),
(4, 'Королев'),
(5, 'Ильин');

-- --------------------------------------------------------

--
-- Структура таблицы `STATE`
--

CREATE TABLE IF NOT EXISTS `STATE` (
  `staid` int(11) NOT NULL AUTO_INCREMENT,
  `manid` int(11) NOT NULL,
  `staname` varchar(256) NOT NULL,
  PRIMARY KEY (`staid`),
  KEY `manid` (`manid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Дамп данных таблицы `STATE`
--

INSERT INTO `STATE` (`staid`, `manid`, `staname`) VALUES
(1, 1, 'Москва'),
(2, 1, 'Санкт-Петербург'),
(3, 2, 'Калиниград'),
(4, 3, 'Усинск'),
(5, 4, 'Волгоград'),
(6, 2, 'Москва'),
(7, 5, 'Вологда');

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `EDUCATION`
--
ALTER TABLE `EDUCATION`
  ADD CONSTRAINT `education_ibfk_1` FOREIGN KEY (`manid`) REFERENCES `MAN` (`manid`);

--
-- Ограничения внешнего ключа таблицы `STATE`
--
ALTER TABLE `STATE`
  ADD CONSTRAINT `state_ibfk_1` FOREIGN KEY (`manid`) REFERENCES `MAN` (`manid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
