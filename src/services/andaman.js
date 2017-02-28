var isReady = false;
var readyPromise = null;
var andamanApi;
var client = {};

var config = {
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
};

config.mode = ClientIO.Enum.Mode.PROD;
config.serverProtocol = ClientIO.Enum.ServerProtocol.HTTPS;
config.port = 443;

module.exports = {
    ready: function () {
        if (isReady) return Promise.resolve({ andaman: andamanApi, client: client });
        if (readyPromise) return readyPromise;

        readyPromise = new Promise(function (resolve) {
            var client = new Client(config, ClientIO, ClientAPI);

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

                readyPromise = null;
                isReady = true;
                resolve({ andaman: andamanApi, client: client });
            });
        })
    }
}