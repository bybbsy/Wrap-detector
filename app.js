var body = document.querySelector('body')

var detectOnWrapping = function (classId) {
  var currentItems = []
  var currentItem = {}

  items = document.getElementById(classId)

  var children = items.childNodes

  for (var node in children) {
    if ( children[node].className === 'menu-item' || children[node].className === 'menu-item menu-item-has-children') {
      currentItem = children[node].getBoundingClientRect()
      currentItems.push(currentItem)

      if (currentItems[0].top < currentItem.top) {
        console.log(currentItem)
        body.setAttribute('wrap', '')
        break
      }
    }
  }
}

window.onload = function (event) {
  detectOnWrapping('menu-test')
}
