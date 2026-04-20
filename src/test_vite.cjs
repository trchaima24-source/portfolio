const { spawn } = require('child_process');
const http = require('http');

const vite = spawn('npx.cmd', ['vite'], { cwd: '../' });

vite.stdout.on('data', (data) => {
  const msg = data.toString();
  console.log(`Vite: ${msg}`);
  if (msg.includes('ready in')) {
    http.get('http://localhost:5173/src/main.jsx', (res) => {
      console.log('Status:', res.statusCode);
      
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
           console.log("Body:", body);
        }
        vite.kill();
        process.exit(0);
      });
    });
  }
});

vite.stderr.on('data', (data) => {
  console.error(`Vite error: ${data.toString()}`);
});

setTimeout(() => {
  console.log('Timeout');
  vite.kill();
  process.exit(1);
}, 15000);