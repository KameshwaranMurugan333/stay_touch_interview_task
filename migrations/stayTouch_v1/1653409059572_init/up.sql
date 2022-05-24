SET check_function_bodies = false;
CREATE TABLE public.master_gender (
    id integer NOT NULL,
    gender text NOT NULL
);
CREATE SEQUENCE public.master_gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.master_gender_id_seq OWNED BY public.master_gender.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    gender integer
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
CREATE TABLE public.user_tracking (
    id integer NOT NULL,
    user_id integer NOT NULL,
    lat public.geometry NOT NULL,
    lang public.geometry NOT NULL
);
CREATE SEQUENCE public.user_tracking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_tracking_id_seq OWNED BY public.user_tracking.id;
ALTER TABLE ONLY public.master_gender ALTER COLUMN id SET DEFAULT nextval('public.master_gender_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.user_tracking ALTER COLUMN id SET DEFAULT nextval('public.user_tracking_id_seq'::regclass);
ALTER TABLE ONLY public.master_gender
    ADD CONSTRAINT master_gender_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_tracking
    ADD CONSTRAINT user_tracking_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_gender_fkey FOREIGN KEY (gender) REFERENCES public.master_gender(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.user_tracking
    ADD CONSTRAINT user_tracking_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE SET NULL;
