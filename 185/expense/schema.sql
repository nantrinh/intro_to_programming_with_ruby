CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6, 2) CHECK (amount > 0),
  memo text,
  created_on date DEFAULT CURRENT_TIMESTAMP
);
