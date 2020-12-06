const transpose = window.mp4Transpose;
const input = document.getElementById('input');
const videoBefore = document.getElementById('video-before');
const videoAfter = document.getElementById('video-after');
input.onchange = function () {
    const file = input.files[0];
    const o = URL.createObjectURL(file);
    videoBefore.src = o;
    file.arrayBuffer().then(val => {
        const mp4Buffer = transpose(val, '270');
        const mp4 = new File([mp4Buffer], 'output.mp4', { type: 'video/mp4' });
        const url = URL.createObjectURL(mp4);
        videoAfter.src = url;
    })
}