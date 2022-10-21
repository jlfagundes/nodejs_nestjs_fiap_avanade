import fs, { existsSync, mkdirSync } from 'fs';

console.log(process.argv);

if (process.argv[2]) {
    const cmd = process.argv[2];
    let folders = [];
    let files = [];

    switch (cmd) {
        case "html":
          folders = [
            "assets",
            "assets/css",
            "assets/js",
            "assets/images",
            "assets/fonts",
          ];
          files = ["index.html", "assets/css/style.css", "assets/js/main.js"];
          break;
        case "react":
          folders = [
            "src",
            "src/components",
            "src/pages",
            "src/assets",
            "src/assets/css",
            "src/assets/js",
            "src/assets/images",
            "src/assets/fonts",
          ];
          files = [
            "src/index.js",
            "src/components/App.js",
            "src/pages/Home.js",
            "src/assets/css/style.css",
            "src/assets/js/main.js",
          ];
          break;
        default:
          console.log("Invalid command");
    }
		folders.forEach((folder) => {
			if (!fs.existsSync(folder)){

				fs.mkdirSync(folder);
				console.log(`Pasta ${folder} criada!`);
			} else {
				console.log(`Pasta ${folder} já existe!`);
			}
		});  

		// desafio para treinar lógia
		// se passar o argumento --complete deve criar os files do array files.
}

/*
const dir = 'upload';

let file = 'palmeiras2.txt';
let path = `${dir}/${file}`;

if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
        if (err) throw err; // estoura o processo é retorna o erro
        console.log(`Criando diretório: ${dir}`);
    });
} else {
    console.log(`Acessando diretório: ${dir}`);
}
*/

/*
let msg = 'Palmeiras vai ganhar o Mundial, um dia...';
if (!fs.existsSync(path)) {
    fs.writeFile(path, msg, (err) => {
        if (err) throw err; // estoura o processo é retorna o erro
        console.log(`Arquivo ${file} criado`);
    });
}
*/
