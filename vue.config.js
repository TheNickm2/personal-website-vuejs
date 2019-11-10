module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/_variables.scss";
                    @import "./node_modules/bootstrap/scss/bootstrap.scss";
                    @import "./node_modules/bootstrap-vue/src/index.scss";
                    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed|Ubuntu:400,400i,700,700i&display=swap');
                    @import "@/assets/scss/_shared.scss";
                `
            }
        }
    }
};