this.onmessage = (e) => {
    if(e.data.input !== undefined) {
        for(let i=1; i<10000000; i++) {
            e.data.input = e.data.input + i
        }
        this.postMessage(e.data.input)
        console.log(e.data.input)
    }
}
