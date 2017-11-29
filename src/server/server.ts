import * as express from 'express';
import {join} from 'path';
import * as bodyParser from 'body-parser';
import * as config from 'config';

class Server {
    static _instance: Server;
    app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use("/node_modules", express.static(join(process.cwd(), '/node_modules')));
        this.app.use("/", express.static(join(process.cwd(), '/')));
        this.init_app();
        this.init_server();
    }

    static createInstance(): Server {
        switch (this._instance instanceof Server) {
            case true:
                return this._instance;
            case false:
                return this._instance = new Server();
        }
    }

    init_app(): void {
        this.app.get("/*", (req: express.Request, res: express.Response) => {
            res.sendFile(join(process.cwd(), '/index.html'));
        });
    }

    init_server(): void {
        let port: number = config.get("port");
        this.app.listen(port, () => {
            console.log(`Application server running at port ${port}`);
        });
    }
}

Server.createInstance();
