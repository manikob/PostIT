PostID Notest Application
=========================

This is ma PostIT Notes demo application

Tech specification:

## Server side
* SpringBoot ver 2.1.4
* Java 1.8
* JPA and Hibernate5 for relationald database
* [HSQLDB](http://hsqldb.org/) relational database. Fast eand easy to use, most suitable for demo purpose. Data are stored in DB files under ./db/ folder.
* Another instance of HSQLDB is used for unit testing. It is "in memory DB instance".
* [Lombok](https://projectlombok.org/) library for autogenerating getters/setters/noArgs contructors, builders etc.
* [REST Assured](https://github.com/rest-assured/rest-assured) for simplifying testing of REST based services

## UI Side
* Angular8
