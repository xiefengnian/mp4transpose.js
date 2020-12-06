
# MP4 rotate
Used to rotate MP4 video, no ffmpeg, no re-encoding, can be used on both the Web side and the Node side. The implementation principle is as follows:

[stackoverflow: rotate-mp4-videos-without-re-encoding](https://stackoverflow.com/a/49535017)

!!!Notice: Browser memory is limited, and too large a video may throw an error.

## Usage
See the example folder for more information.
### 1. web
#### with webpack
```js
import transpose from './brower.transpose';
const input = document.getElementById('input');
input.onchange = function () {
    const file = input.files[0];
    file.arrayBuffer().then(val => {
        const mp4Buffer = transpose(val, '270'); // rotate mp4 from ab
        const mp4 = new File([mp4Buffer], 'output.mp4', { type: 'video/mp4' }); // create a new mp4 file from ab
        const url = URL.createObjectURL(mp4);
        window.open(url);
    })
}
```
#### with dist
```html
<script src="~@mp4Transpose/dist/bundle.js"></script>
<script>
    const transpose = window.mp4Transpose;
</script>
```
### 2. Node.js

As above.

## Arguments

transpose(mp4File, rotate): Uint8Array | Buffer

- mp4File: ArrayBuffer
    
    the MP4 file you want to rotate 
- rotate: "0" | "90" | "180" | "270"

    the ratation of ouput mp4 file