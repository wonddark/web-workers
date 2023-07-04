addEventListener('message', ({data}) => {
    console.log('Received', data)
    setTimeout(() => {
        postMessage(`Ok, we heard you.\nYou sent:\n${data}`)
    }, 800)
})
