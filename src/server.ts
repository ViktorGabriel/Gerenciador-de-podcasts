import * as http from 'http'

const server =  http.createServer((req:http.IncomingMessage,res:http.ServerResponse) => {
    console.log(req)
});

server.listen(process.env.PORT, () => {
    console.log(`Servidor inicio na porta ${process.env.PORT}`)
})

