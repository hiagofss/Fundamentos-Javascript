let fs = require('fs');

fs.readdir('./files', function (err, files) {
    {
        let filesList = files;

        let filesObj = [];

        filesList.forEach((file) => {
            heroi = {
                img: `./files/${file}`,
                name: `${file.split('.')[0].toUpperCase()}`,
            };
            filesObj.push(heroi);
        });

        console.log(filesObj);
    }
});
