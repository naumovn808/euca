import { filePaths } from '../config/paths.js';
import localtunnel from 'localtunnel';

const server = async (instance) => {
	instance.init({
		server: {
			baseDir: filePaths.buildFolder,
		},
		logLevel: 'info',
		cors: true,
		notify: true,
		open: false,
		reloadOnRestart: true,
		port: 3000,
		publicPath: '/',
	});

	const tunnel = await localtunnel({ port: 3000 });

	console.log('LocalTunnel URL:', tunnel.url); 

	tunnel.on('close', () => {
		console.log('Tunnel closed');
	});
};

export { server };
