const path = require('path');

module.exports = [{
    entry: ['./static/build/client/scripts/components/init.components.js',
    './static/build/client/scripts/components/root/root.component.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'static/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx' ],
        modules: ["node_modules"]
    },
     module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                  use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader" ,
                    options: { modules: true }
                  }]
            }
            ]
    }
}
];


/*
rules:[{
            test:/\.(ts|tsx)$/,
            loader: 'ts-loader',
            options: {
                configFile: path.resolve("./compile/client/tsconfig.json")
            },
            exclude: '/node_modules/'
        }
*/