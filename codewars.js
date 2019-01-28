const btn = {
  onClick: null
}

btn.onClick = (callback) => callback('hello world')

btn.onClick(console.log)