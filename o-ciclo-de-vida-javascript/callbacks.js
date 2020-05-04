const fs = require('fs');

// fs.readFile('./file1.txt', (error, response) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	if (response) {
// 		console.log(response.toString());
// 	}
// });

fs.readFile('./file1.txt', (error1, response1) => {
	if (error1) {
		console.log(error1);
	}
	fs.readFile('./file2.txt', (error2, response2) => {
		if (error2) {
			console.log(error2);
		}
		fs.readFile('./file3.txt', (error3, response3) => {
			if (error3) {
				console.log(error3);
			}

			const content = `${response1}\n${response2}\n${response3}\n`;
			console.log(content);
			fs.writeFile('./final.txt', content, (error, response) => {
				if (error) {
					console.log(error);
					return;
				}
				console.log('Arquivo salvo com sucesso!');
			});
		});
	});
});
