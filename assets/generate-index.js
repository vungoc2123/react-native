const fs = require('fs');
const path = require('path');

function snakeToCapitalized(str) {
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

const iconsDirectories = ['./icons', './icons/icons-base']; // Điều chỉnh đường dẫn tới thư mục icons nếu cần thiết

let exportStatements = '';

iconsDirectories.forEach((iconsDirectory) => {
    const files = fs.readdirSync(iconsDirectory);

    exportStatements += files
        .filter((file) => file.endsWith('.tsx'))
        .map((file) => {
            const componentName = snakeToCapitalized(path.basename(file, '.tsx'));
            return `export { default as ${componentName} } from "./${path.relative('./icons', path.join(iconsDirectory, file))}";`;
        })
        .join('\n');
});

const indexContent = `${exportStatements}\n`;
const indexPath = './icons/index.ts'; // Đường dẫn tới file index.ts trong thư mục icons

fs.writeFile(indexPath, indexContent, (err) => {
    if (err) {
        console.error('Error writing index.ts:', err);
        return;
    }
    console.log('index.ts file created successfully.');
});
