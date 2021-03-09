import { Connection, createConnection, getConnectionOptions } from "typeorm" 

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? "nlw_test" : defaultOptions.database
        })
    );
}