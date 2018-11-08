let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        personer: [
            {fornavn: 'Steinar', etternavn: 'Sagen', vis: true},
        ],
        methods: {
            addPerson: () => this.personer.push({
                fornavn: this.fornavn,
                etternavn: this.etternavn
            })
        }
    }
});
