getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.htm')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {

    }
    request.send()
}


getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('fail...')
    }
    request.send()
}

