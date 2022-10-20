// no commonjs usaria o require
// no module uso o import from
import fs from 'fs';

const dir = 'upload';

// Todas as funções Sync são bloqueantes (para o código pra executar o que eu pedi)
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`Criando diretório: ${dir}`);
} else {
    console.log(`Acessando diretório: ${dir}`);
}

let msg = 'Palmeiras é campeão Brasileiro 2022';
let file = 'palmeiras.txt';
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
    fs.writeFileSync(path, msg);
    console.log(`Arquivo ${file} criado`);
}