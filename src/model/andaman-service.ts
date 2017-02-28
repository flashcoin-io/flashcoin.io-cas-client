// import Andaman from "Andaman";
import ClientIO from "ClientIO";
import Client from "Client";
import ClientAPI from "ClientAPI";

interface IAndaman {
}

export default class AndamanService {
    // private static service = Andaman;

    static isReady = false;
    static readyPromise = null;
    static andamanApi;
    static client = {};

    static config:any = {
        // mode: ClientIO.Enum.Mode.DEV,
        host: 'cas.unseen.is',
        // port: 3000,
        // dataProtocol: ClientIO.Enum.DataProtocol.SIMPLE,
        // device: ClientIO.Enum.Device.HTTP_LONG_POLL,
        // serverPublicKey: '',
        // clientPublicKey: '',
        // clientSecretKey: '',
        // sessionToken: 'sessionToken',
        // idToken: $cookieStore.get('token')
    }

    static ready(): Promise<{ andaman: IAndaman, pipe: any }> {
        this.config.mode = ClientIO.Enum.Mode.PROD;
        this.config.serverProtocol = ClientIO.Enum.ServerProtocol.HTTPS;
        this.config.port = 443;

        if (this.isReady) return Promise.resolve({ andaman: this.andamanApi, client: this.client });
        if (this.readyPromise) return this.readyPromise;

        var self = this;
        this.readyPromise = new Promise(function (resolve) {
            var client = new Client(self.config, ClientIO, ClientAPI);
            var Enum = client.Enum;

            client.start(function (status, response) {
                switch (status) {
                    case Enum.Status.CONNECTION_OPENED:
                        break;

                    case Enum.Status.CONNECTION_CLOSED:
                        break;

                    case Enum.Status.SESSION_RESTORED:
                        break;

                    case Enum.Status.SESSION_UPDATED:
                        break;

                    case Enum.Status.SESSION_FAILED:
                        break;
                }

                if (client.config.mode === ClientIO.Enum.Mode.DEV) {
                    console.log(status, response);
                }

                self.readyPromise = null;
                self.isReady = true;
                resolve({ andaman: self.andamanApi, client: client });
            });
        })
        return this.readyPromise;
    }
}