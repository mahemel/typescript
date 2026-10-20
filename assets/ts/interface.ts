/*
interface AppConfig {
    appName: string;
    version: string; // 1.1.6
    debug: boolean;
    port: number;
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
    };
    features: {
        registration: boolean;
        darkMode: boolean;
    };
}
*/

interface Database {
    host: string;
    port: number;
    username: string;
    password: string;
}

interface AppConfig {
    appName: string;
    version: string; // 1.1.6
    debug: boolean;
    port: number;
    database: Database;
    features: {
        registration: boolean;
        darkMode: boolean;
    };
}
