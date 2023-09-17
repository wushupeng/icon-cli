import m_koa from 'koa'
import m_koa_router from 'koa-router'
import m_koa_static from 'koa-static'
import m_koa_connect from 'koa-connect'
import m_koa_compress from 'koa-compress'
import { renderPage } from 'vite-plugin-ssr/server'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import { Server as SocketServer } from "socket.io"
import http from 'http'

const __dirname = dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

startServer();

async function startServer() {

  const app = new m_koa();
  // app.use(m_koa_compress());

  const router = new m_koa_router();

  if (isProduction) {
    // In production, we need to serve our static assets ourselves.
    // (In dev, Vite's middleware serves our static assets.)
    app.use(m_koa_static(`${root}/dist/client`));
  } else {
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our server in production.)
    const viteDevMiddleware = (
      await createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares;
    app.use(m_koa_connect(viteDevMiddleware));
  };

  // ...
  // Other middlewares (e.g. some RPC middleware such as Telefunc)
  // ...

  // Vite-plugin-ssr middleware. It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).
  router.get('(.*)', async (ctx, next) => {
    console.log(`--${ctx.originalUrl}`)
    const pageContextInit = { urlOriginal: ctx.originalUrl, };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) { return next() };

    ctx.status = httpResponse.statusCode;
    ctx.type = httpResponse.contentType;
    ctx.body = httpResponse.body;

  });
  app.use(router.routes());
  const server = http.createServer(app.callback())
  const io = new SocketServer(server)
  io.on("connection", (socket) => {
    console.log(`socket ${socket.id} connected`);
    // send an event to the client
    socket.emit("message", "bar");

    socket.on("message", (msg: string) => {
      // an event was received from the client
      console.log(`recive message:${msg.toString()}`)
    });

    // upon disconnection
    socket.on("disconnect", (reason) => {
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
    });
  });
  const port = process.env.PORT || 3000;
  server.listen(port);
};