// Importamos da dependencia dotEnv
import dotEnv from 'dotenv';

// Cargar las variables de entorno
dotEnv.config();

// Creando objeto de configuracion 

// Creando configuracion por defecto 
const defaultConfig = {
    port: process.env.PORT || '3000',
    appVersion: process.env.APP_VERSION,
};

//Configuracion para desarrollo 
const devConfig = {
    nodeEnv: 'development',
    mongoUrl: 'local Url',
    debug: process.env.DEBUG,
};

//Configuracion para produccion 
const prodConfig = {
    env: 'production',
    mongoUrl: 'clud url',
};

//Funcion que dado el entorno de ejecucion 
//nos retorne el objeto de configuracion adecuado 
function envConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'production':
            return prodConfig;
        default:
            return prodConfig;
    }
}

//Exportar la configuracion 
export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};
