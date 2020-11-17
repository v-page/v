import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueClipboard from 'vue-clipboard2'

Vue.use(Vuetify);


VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                background: "#fcfcfc",
            },
            dark: {
                background: "#303030",
            },
        },
    },
});

