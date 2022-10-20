import fs from 'fs';

const dir = 'upload';

let msg = 'Palmeiras vai ganhar o Mundial, um dia...';
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


if (!fs.existsSync(path)) {
    fs.writeFile(path, msg, (err) => {
        if (err) throw err; // estoura o processo é retorna o erro
        console.log(`Arquivo ${file} criado`);
    });
}