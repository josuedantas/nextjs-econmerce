const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        unoptimized: true,
        remotePatterns: [{hostname: "images.unsplash.com"},
        {hostname: "lh3.googleusercontent.com"},
    ],
    },
};

module.exports = nextConfig;
