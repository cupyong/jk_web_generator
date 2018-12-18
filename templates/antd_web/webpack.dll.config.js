const path = require("path");
const webpack = require("webpack");

const Libs ={
    react:[
        "react",
        "react-dom",
        "react-router",
        'react-redux',
        "redux-thunk",
        "redux-logger",
        "react-cookies",
    ],
    ui:[
        'antd/lib/button'
    ],
}

const dllPath = path.join(__dirname, 'static');

module.exports = {
    entry: {
        react:[
            "react",
            "react-dom",
            "react-router",
            'react-redux',
            "redux-thunk",
            "redux-logger",
            "react-cookies",
        ],
        ui:[
            'antd/lib/button'
        ],
    },
    output: {
        path: dllPath,
        filename: "[name].js",
        library: "_dll_[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "_dll_[name]",
            path: path.join(__dirname, 'manifest', 'manifest.json'),
        }),
    ]
}