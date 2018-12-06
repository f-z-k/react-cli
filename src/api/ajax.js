import axios from 'axios'
export const requestApi = function (_type, _url, _params, _root) {
  // _params.xxx = '默认参数'
  if (!_params) {
    _params = {} // 防止 参数 underfind
  }
  for (let key in _params) {
    if (_params.hasOwnProperty(key)) {
      if (_params[key] === undefined || _params[key] === null || _params[key] === '') {
        delete _params[key]
      }
    }
  }
  _url = _root || "config.apiRoot" + _url
  return new Promise((resolve, reject) => {
    var _config = {
      url: _url,
      withCredentials: true
    }
    if (_type === 'get') { // get post 接收参数
      _config.method = 'get'
      _config.params = _params
    } else {
      _config.method = 'POST'
      _config.data = _params
    }
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.response && error.response.status === 401) {
        // 未登录处理
      } else {
        return Promise.reject(error);
      }
    });
    return axios(_config).then(res => {
      if (res.data.success) {
        resolve(res['data'])
      } else {
        reject(res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  })
}
