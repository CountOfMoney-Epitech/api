export interface DBConfigAttributesInterface {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  url?: string;
}

export interface DBConfigInterface {
  development: DBConfigAttributesInterface;
  test: DBConfigAttributesInterface;
  production: DBConfigAttributesInterface;
}
