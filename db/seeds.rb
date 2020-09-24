# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Demo', email: 'Demo', password: 'hunter12')

songs = Song.create([
    {
        title: "Crank Dat", 
        artist: "Soulja Boy", 
        lyrics: , 
        primary_tag: "Hip-hop"
    },

    {
        title: "Exile", 
        artist: "Taylor Swift", 
        lyrics: , 
        primary_tag: "Pop" 
    },

    {
        title: "Lost in the Supermarket", 
        artist: "The Clash", 
        lyrics: , 
        primary_tag: "Rock"
    },

    {
        title: "Pretty", 
        artist: "The Weeknd", 
        lyrics: , 
        primary_tag: "R&B"
    },

    {
        title: "Redbone", 
        artist: "Childish Gambino", 
        lyrics: , 
        primary_tag: "R&B"
    },

    {
        title: "What's the Use?", 
        artist: "Mac Miller", 
        lyrics: , 
        primary_tag: "Hip-Hop" 
    },

    {
        title: "The Climb Back", 
        artist: "J. Cole", 
        lyrics: , 
        primary_tag: "Hip-Hop"
    },

    {
        title: "Ring Ring", 
        artist: "Juice WRLD", 
        lyrics: , 
        primary_tag: "Hip-Hop"
    },

    {
        title: "Doin' It Right (feat. Panda Bear)", 
        artist: "Daft Punk", 
        lyrics: , 
        primary_tag: "Electronic"
    },

    {
        title: "Headlines", 
        artist: "Drake", 
        lyrics: , 
        primary_tag: "Hip-Hop"
    },

])