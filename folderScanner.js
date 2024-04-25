const testFolder = './public/icons';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  const imgPaths = [];
  files.forEach((file) => {
    imgPaths.push('/icons/' + file);
  });
  fs.writeFileSync('iconPaths.json', JSON.stringify(imgPaths));
});
