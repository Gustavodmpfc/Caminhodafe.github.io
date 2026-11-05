const fs = require('fs');
const path = require('path');

const indexPath = path.join('dist', 'index.html');
const bundleDir = path.join('dist', '_expo', 'static', 'js', 'web');

const index = fs.readFileSync(indexPath, 'utf8');
fs.writeFileSync(indexPath, index.replaceAll('src="/', 'src="./'));

for (const name of fs.readdirSync(bundleDir)) {
  if (!name.endsWith('.js')) continue;
  const bundlePath = path.join(bundleDir, name);
  const bundle = fs.readFileSync(bundlePath, 'utf8');
  fs.writeFileSync(bundlePath, bundle.replaceAll('"/assets', '"./assets'));
}
