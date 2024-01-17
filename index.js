const jsonServer=require('json-server')
const mediaPlayerServer=jsonServer.create()
 const router=jsonServer.router('db.json')
 const middlewares=jsonServer.defaults()
 const port = 4000||process.env.port
 mediaPlayerServer.use(middlewares)
 mediaPlayerServer.use(router)
 mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayer listening at port ${port},and waiting for client request`);
 })