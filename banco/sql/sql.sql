CREATE TABLE IF NOT EXISTS customer ( 
	id serial NOT NULL,
	created timestamptz NOT NULL,
	updated timestamptz NOT NULL,
	name varchar(255) NULL,
	email varchar(255) NULL,
	cpf varchar(14) NULL,
	phone varchar(15) NULL,
	birth_date date NULL,
	secret varchar(255) NULL,
	CONSTRAINT customer_pkey PRIMARY KEY (id)
);


insert into customer 
values (default, now(), now(), 'Name', 'email@email.com', '111.111.111-11', '27 99999-9999', '2022-01-01', 'asdklfjaskldjfasdkljflkasdfj');

