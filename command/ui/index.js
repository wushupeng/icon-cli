const cp = require("child_process");
const path = require("path")

module.exports = async options => {
    const task1 = cp.spawn('pnpm',['i'],{
        cwd: path.resolve(__dirname, '../../an-server')
    })
    task1.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    task1.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    task1.on('exit', (code) => {
        const server = cp.spawn('pnpm', ['server:prod'], {
            cwd: path.resolve(__dirname, '../../an-server')
        })
        server.stdout.on('data', (data) => {
            console.log(data.toString());
        });
    
        server.stderr.on('data', (data) => {
            console.error(data.toString());
        });
    
        server.on('exit', (code) => {
            console.log(`Child exited with code ${code}`);
        });
    });
    
    // const port = options.port || 3000
    // console.log(`server start at http://localhost:${port}`)
}