export default class MediaHandler {
    getPermissions() {
        return new Promise((res, rej) => {
            navigator.mediaDevices.getUserMedia({video: true, audio: true})
                .then((stream) => {
                    res(stream);
                })
                .catch(err => {
                    throw new Error(`Unable to fetch stream ${err}`);
                })
        });
    }
}