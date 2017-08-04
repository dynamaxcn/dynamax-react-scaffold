import BaseService from './BaseService';

class UCService extends BaseService {


    login(user) {
        return Promise.resolve(user).then(res => {
            return {
                tokens: 'XXXX-XXXX-XXXX-XXXX',
                userInfo: res
            }
        })
    }

}

export default UCService