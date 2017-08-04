import BaseService from './BaseService';

class UCService extends BaseService {


    login(user) {
        return Promise.resolve(user).then(res => {
            return {
                token: 'XXXX-XXXX-XXXX-XXXX',
                user: res
            }
        })
    }

}

export default UCService