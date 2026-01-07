const { createApp } = Vue;

createApp({
    data() {
        return {
            images: [
                { id: 1, url: 'https://via.placeholder.com/400x300', alt: 'Tech Project', caption: 'Mobile App Development' },
                { id: 2, url: 'https://via.placeholder.com/400x300', alt: 'Cybersecurity', caption: 'Security Lab Setup' },
                { id: 3, url: 'https://via.placeholder.com/400x300', alt: 'Databases', caption: 'Database Schema Design' }
            ]
        }
    }
}).mount('#gallery-app');

createApp({
    data() {
        return {
            newName: '',
            newMessage: '',
            entries: [{ name: 'Admin', message: 'Welcome to my guestbook!' }]
        }
    },
    methods: {
        addEntry() {
            this.entries.unshift({ name: this.newName, message: this.newMessage });
            this.newName = '';
            this.newMessage = '';
        }
    }
}).mount('#guestbook-app');
