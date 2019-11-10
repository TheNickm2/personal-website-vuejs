module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/_variables.scss";
                `
            }
        }
    },
    pwa: {
        name: 'Nick Mykkanen',
        workboxOptions: {
            exclude: [
                /\.map$/,
                /img\/icons\//,
                /favicon\.ico$/,
                /^manifest.*\.js?$/,
                /^_redirects/
            ]
        }
    }
};