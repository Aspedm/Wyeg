import Vue from 'vue';
import VueResourse from 'vue-resource';

Vue.use(VueResourse);

class Api {
    /**
     * @description Send get request
     * @param {object} request
     * @returns {Promise}
     */
    get (request) {
        return Vue.http.get(request.url)
            .then(response => {
                if (response instanceof Object) {
                    return response.data;
                } else {
                    Promise.reject(`Error code: ${response.status}; Methon: ${request.url}`)
                }
            }).catch( error => console.error(error))
    }
}

export default Api