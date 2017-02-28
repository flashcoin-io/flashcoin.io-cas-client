import AndamanService from '../andaman-service';
// import store from '../store';
// import * as actions from './actions';
// import { storeUserKey, getUserKey } from '../utils';

export default class UserService {
    constructor() { }

    private static _instance: UserService;

    static singleton() {
        if (!UserService._instance) {
            UserService._instance = new UserService();
        }

        return UserService._instance;
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            AndamanService.ready().then((opts) => {
                var andaman = opts.andaman;
                var client = opts.client;

                var param = {
                    email: email,
                    password: password,
                    resource: 'web',
                    ui: true
                };

                console.log('client', client);

                client.API.Account1Service.Account1.login(param, function(error, result, payload) {
                    if (!error) {
                        // $cookieStore.put('token', result.token);
                        // currentUser = {
                        //     name: result.name,
                        //     email: param.email,
                        //     role: result.role,
                        //     avatar: payload
                        // };

                        // deferred.resolve();
                        // return cb();
                        console.log('login result', result);
                        console.log('login payload', payload);
                        resolve(result);

                    } else {
                        // deferred.reject(error);
                        // return cb(error);
                        reject(error);
                    }
                });

                // andaman.sso_login_v2(pipe, credentials, function (resp) {
                //     if (resp.rc == 1) {
                //         pipe.setAuthInfo(resp.profile.auth_version, resp.profile.sessionToken);
                //         let userKey = {
                //             idToken: resp.profile.idToken,
                //             encryptedPrivKey: resp.profile.privateKey,
                //             publicKey: resp.profile.publicKey
                //         };
                //         storeUserKey(userKey);
                //     }

                //     resolve(resp);
                // });
            });
        });
    }
}