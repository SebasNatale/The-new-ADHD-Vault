self.onmessage = (event: MessageEvent) => {
    try {
        self.postMessage("Test successful!", event.data)
    } catch (error) {
        console.log("Test failed :(  ", error)
        self.postMessage("Test failed :(  ", error)
    }
};