import Vue from 'vue';

const instance = new Vue({
    el: "#app",
    data: {
        message: "ledala",
    },
    delimiters: ['${', '}']
})