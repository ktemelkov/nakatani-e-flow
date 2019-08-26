
const path = require('path')
const os = require('os')
const { spawn } = require('child_process')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')


let electronRunning = false

const runElectronPlugin = {
    apply: (compiler) => {
        compiler.hooks.done.tap('StartElectronPlugin', (compilation) => {
            if (!electronRunning) {
                electronRunning = true

                const child = spawn(os.platform() === 'win32' ? 'npx.cmd' : 'npx', [ 'electron', './app/main.js' ])

                child.stdout.on('data', (data) => process.stdout.write(data))
                child.stderr.on('data', (data) => process.stderr.write(data))
                child.on('exit', () => process.exit(0))    
            }
        })
    }
}


module.exports = (env) => {
    const BUILD_MODE = (env.FLAVOR && env.FLAVOR === 'development') ? 'development' : 'production'
    const DEBUG = (BUILD_MODE === 'development') ? true : false
    const LAUNCH = (env.LAUNCH) ? true : false
    
    return {
        name: 'render',
        mode: BUILD_MODE,
        target: 'electron-renderer',
        watch: LAUNCH,
        entry: [ 
            './src/index.js'
        ], 
        output: {
            path: path.join(__dirname, 'app'),
            filename: 'index.js'
        },
        devtool: DEBUG ? 'inline-source-map' : false,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env'],
                        compact: true
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg|ttf|woff2|woff|eot)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.json', '.jsx', '.css']
        },
        plugins: [
            new CleanWebpackPlugin({ 
                dry: true, 
                verbose: true
            }),
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' },
                { from: 'node_modules/semantic-ui-css/semantic.min.css', to: 'assets/' },
                { from: 'node_modules/semantic-ui-css/themes/', to: 'assets/themes/' },
                { from: 'src/index.html' },
                { from: 'src/main.js' }
            ], { copyUnmodified: true }),
            new MiniCssExtractPlugin({
                filename: 'assets/bundle.css',
                ignoreOrder: false
              }),
            ...LAUNCH ? 
            [ runElectronPlugin ] : []
        ]
    }
}