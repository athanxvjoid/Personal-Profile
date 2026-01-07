const { createApp } = Vue;

createApp({
    data() {
        return {
            // Data for the Gallery Section
            galleryItems: [
                { caption: "Neon Nights Project", url: "placeholder.jpg" }, // Replace placeholders later
                { caption: "UI/UX Concept Design", url: "placeholder.jpg" },
                { caption: "Vue.js Experiment", url: "placeholder.jpg" },
                { caption: "Mobile App Wireframe", url: "placeholder.jpg" }
            ],
            
            // Data for the Guestbook Section
            newEntryName: '',
            newEntryMessage: '',
            guestbookList: [
                // Pre-populate with a couple of examples
                { name: "Admin", message: "Welcome to my creative space!" },
                { name: "Visitor 1", message: "Love the dark mode design." }
            ]
        }
    },
    methods: {
        // Method to handle form submission
        addEntry() {
            // Basic validation
            if (this.newEntryName.trim() === '' || this.newEntryMessage.trim() === '') {
                alert("Please fill in both fields.");
                return;
            }

            // Add new entry to the beginning of the list
            this.guestbookList.unshift({
                name: this.newEntryName,
                message: this.newEntryMessage
            });

            // Clear the form inputs
            this.newEntryName = '';
            this.newEntryMessage = '';
        }
    }
}).mount('#app');
