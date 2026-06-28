```shell
bun install
NITRO_PRESET=node-server bun run build
node .output/server/index.mjs 
tar -czf app-output.tar.gz .output
HOST=0.0.0.0 PORT=50080 node .output/server/index.mjs
```