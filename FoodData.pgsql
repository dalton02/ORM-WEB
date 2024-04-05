--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: foods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.foods (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    category character varying(255),
    quantity integer,
    expirationdate date,
    price numeric(10,2)
);


ALTER TABLE public.foods OWNER TO postgres;

--
-- Name: foods_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.foods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.foods_id_seq OWNER TO postgres;

--
-- Name: foods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.foods_id_seq OWNED BY public.foods.id;


--
-- Name: foods id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.foods ALTER COLUMN id SET DEFAULT nextval('public.foods_id_seq'::regclass);


--
-- Data for Name: foods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.foods (id, name, category, quantity, expirationdate, price) FROM stdin;
4	Apple	Fruit	2	2024-04-10	5.40
5	Apple	Fruit	2	2024-04-10	5.40
6	Apple	Fruit	2	2024-04-10	5.40
7	Apple	Fruit	2	2024-04-10	5.40
8	Apple	Fruit	2	2024-04-10	5.40
9	Cebola	Vegetal	10	2024-04-04	34.55
10	Cebola	Vegetal	10	2024-04-04	34.55
11	Banana	Fruit	2	2024-04-10	27.55
13	Banana	Fruit	2	20444-04-10	27.55
14	Banana	Fruit	2	20444-04-10	27.55
1	Banana	Fruit	2	20444-04-10	27.55
\.


--
-- Name: foods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.foods_id_seq', 14, true);


--
-- Name: foods foods_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.foods
    ADD CONSTRAINT foods_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

