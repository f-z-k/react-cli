import axios from 'axios'
export const asyncActionAjax = function(_dispatch, _type, _method, _url, _params, _root) {
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
  _url = _root || "http://localhost:3009" + _url
  var _config = {
    url: _url,
    withCredentials: true
  }
  if (_method === 'get') { // get post 接收参数
    _config.method = 'GET'
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
  })
  _dispatch({type: _type.REQUEST, response: {
    data: {},
    code: 'REQUEST',
    msg: '请求开始'
  }})
  axios(_config).then(res => {
    if (res.data.success) {
      _dispatch({type: _type.SUCCESS, response: {
        data: res.data,
        code: 'SUSSESS',
        msg: '请求成功'
      }})
    } else {
      _dispatch({type: _type.FAILURE, response: {
        data: {},
        code: 'FAILURE',
        msg: '请求失败'
      }})
    }
  })
}