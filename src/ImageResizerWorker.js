export default () => {
    self.addEventListener("message", e => {
        files.forEach(async (file) => {
            const width = 200;
            const height = 200;

            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = event => {
                const img = new Image();
                img.src = event.target.result;

                img.onload = () => {
                    let elem = document.createElement('canvas');

                    elem.width = width;
                    elem.height = height;
                    let ctx = elem.getContext('2d');

                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.save();

                postMessage(elem.toDataURL());

                };
                reader.onerror = error => console.log(error);

            };

        });
    });
}
