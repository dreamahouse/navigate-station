function App() {
  const obj = {
    a: {
      b: 1,
      c: {
        d: 2,
        e: 3
      }
    },
    f: [1, 2, 3],
    g: {
      h: [4, 5]
    }
  }
  function deepClone(startObj, endObj) {
    let obj = endObj || {}
    for (var i in startObj) {
      if (typeof (startObj[i]) === "object") {
        obj[i] = startObj[i].constructor === Array ? [] : {}
        deepClone(startObj[i], obj[i])
      } else {
        obj[i] = startObj[i]
      }
    }
    return obj
  }
  const cloneObj = deepClone(obj)
  obj.a.b = 88
  console.log('cloneObj: ', cloneObj);
  console.log('obj:', obj)


  return (
    <div>

    </div>
  )
}

export default App
