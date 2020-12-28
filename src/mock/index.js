import Mock, { Random } from 'mockjs'

const { reviews } = Mock.mock({
  'reviews|10-20': [
    {
      'username': '@cword(5)',
      'content': '@cparagraph(5,15)',
      'time': '@date(yyyy-MM-dd hh:mm:ss)'
    }
  ]
})
const { address } = Mock.mock({
  'address|1-3': [
    {
      'name': '@cname(3)',
      'phone': /^1[385][1-9]\d{8}/,
      'addres': '@county(true)' + ' ' + '@ctitle(7)' + Random.integer(1, 99) + '号'
    }
  ]
})

// 从传递过来的url中取出参数所对应的值
const getQuery = function (url, name) {
  const index = url.indexOf('?')
  if (index !== -1) {
    const queryStrArr = url.substr(index + 1).split('&')
    for (var i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=')
      if (itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  return null
}

Mock.mock('/api/get/reviews', 'get', () => {
  getQuery('', '')
  return {
    reviews: reviews
  }
})
Mock.mock('/api/get/addressinfo', 'get', () => {
  return {
    address: address
  }
})
