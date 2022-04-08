
export default {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,

    isDev: () => { 
       return process.env.NODE_ENV === "dev"
    }
}