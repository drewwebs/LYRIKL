# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.delete_all
User.delete_all
Annotation.delete_all


User.create(username: 'Demo', email: 'Demo', password: 'hunter12')

songs = Song.create([
    {
        title: "Crank That (Soulja Boy)", 
        artist: "Soulja Boy", 
        lyrics: "  
[Intro]  
Yuuuuuuu  
Soulja Boy tell 'em  
Ayy, I got this new dance for y'all called the Soulja Boy  
You just gotta punch, then crank back three times from left to right  
  
[Chorus]  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman that ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman dat ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
  
[Verse 1]  
Soulja Boy up in this ho  
Watch me lean then watch me rock  
Superman dat ho  
Yeah, watch me crank that Robocop  
Super fresh, now watch me jock  
Jocking on them haters, man  
When I do that Soulja Boy  
I lean to the left then crank that thang, now (Yuuuuuu)  
I'm jocking on yo' (I'm jocking on yo')  
And if we get to fightin' then I'm cocking on yo' (Then I'm cocking on yo')  
You catch me at yo' local party  
Yes, I crank it everyday  
Haters gettin' mad 'cause  
\"I got me some Bathin' Ape\"  
  
[Chorus]  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman that ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman dat ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
  
[Verse 2]  
I'm bouncin' on my toes  
Watch me supersoak that ho  
I'ma pass it to Arab and he gon' crank it up fo' sho'  
Haters wanna be me, Soulja Boy, I'm the man  
They be lookin' at my neck, sayin' it's the rubberband  
Man (man), watch me do it (Watch me do it)  
Dance (dance), let's get to it (Let's get to it)  
Nope, you can't do it like me, though  
So don't do it like me, folk  
I see you tryna do it like me, man that damn ugly  
  
[Chorus]  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman that ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman dat ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
  
[Verse 3]  
I'm too fresh, off in that ho  
Watch me crank it, watch me roll  
Watch me crank that Roosevelt then super soak that ho  
Supersoak that ho  
Supersoak that ho  
Supersoak that ho  
Supersoak that ho  
I'm too fresh, now watch me dooooooo it  
Watch me shuffle, watch me yuuuuuuu  
Watch me crank that Soulja Boy  
Now Superman, yuuuuuuu  
Superman, do it  
Superman, do it  
  
[Chorus]  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman that ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
Soulja Boy off in this ho  
Watch me crank it, watch me roll  
Watch me crank dat Soulja Boy  
Then Superman dat ho  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch me yuuuuuuu (Crank dat Soulja Boy)  
Now watch  
  
[Outro]  
Yuuuuuuu  
Yuuuuuuu", 
        primary_tag: "Hip-hop"
    },

    {
        title: "All Too Well", 
        artist: "Taylor Swift", 
        lyrics: "  
[Intro]  
I walked through the door with you  
The air was cold  
But something 'bout it felt like home somehow, and I  
Left my scarf there at your sister's house  
And you've still got it  
In your drawer, even now  
  
[Verse 1]  
Oh, your sweet disposition  
And my wide-eyed gaze  
We're singing in the car getting lost upstate  
Autumn leaves falling down like pieces into place  
And I can picture it after all these days  
  
[Pre-Chorus 1]  
And I know it's long gone and  
That magic's not here no more  
And I might be okay, but I'm not fine at all  
Oh, oh, oh  
  
[Chorus 1]  
'Cause there we are again on that little town street  
You almost ran the red 'cause you were looking over at me  
Wind in my hair, I was there, I remember it all too well  
  
[Verse 2]  
Photo album on the counter  
Your cheeks were turning red  
You used to be a little kid with glasses in a twin-sized bed  
And your mother's telling stories 'bout you on the tee-ball team  
You tell me 'bout your past, thinking your future was me  
  
[Pre-Chorus 2]  
And I know it's long gone and  
There was nothing else I could do  
And I forget about you long enough  
To forget why I needed to  
  
[Chorus 2]  
'Cause there we are again in the middle of the night  
We're dancing round the kitchen in the refrigerator light  
Down the stairs, I was there, I remember it all too well, yeah  
  
[Bridge]  
Maybe we got lost in translation  
Maybe I asked for too much  
But maybe this thing was a masterpiece  
'Til you tore it all up  
Running scared, I was there, I remember it all too well  
  
And you call me up again just to break me like a promise  
So casually cruel in the name of being honest  
I'm a crumpled up piece of paper lying here  
'Cause I remember it all, all, all  
Too well  
  
[Verse 3]  
Time won't fly, it's like I'm paralyzed by it  
I'd like to be my old self again  
But I'm still trying to find it  
After plaid shirt days and nights when you made me your own  
Now you mail back my things and I walk home alone  
But you keep my old scarf  
From that very first week  
'Cause it reminds you of innocence  
And it smells like me  
You can't get rid of it  
'Cause you remember it all too well, yeah  
  
[Chorus 3]  
'Cause there we are again when I loved you so  
Back before you lost the one real thing you've ever known  
It was rare, I was there, I remember it all too well  
  
[Outro]  
Wind in my hair, you were there, you remember it all  
Down the stairs, you were there, you remember it all  
It was rare, I was there, I remember it all too well",
        primary_tag: "Pop" 
    },

    {
        title: "Lost in the Supermarket", 
        artist: "The Clash", 
        lyrics: "  
[Chorus]  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
  
[Verse 1]  
I wasn't born, so much as I fell out  
Nobody seemed to notice me  
We had a hedge back home in the suburbs  
Over which I never could see  
I heard the people who live on the ceiling  
Scream and fight, most scarily  
Hearing that noise was my first ever feelin'  
That's how it's been, all around me  
  
[Chorus]  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
  
[Verse 2]  
I'm all tuned in, I see all the programs  
I save coupons from packets of tea  
I've got my giant hit, discotheque album  
I empty a bottle, I feel a bit free  
The kids in halls and the pipes in the walls  
Making noises for company  
Long distance callers make long distance calls  
And the silence makes me lonely  
  
[Chorus]  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
  
[Bridge]  
And it's not here  
It disappeared  
  
[Chorus]  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality  
  
[Bridge]  
I'm all lost  
  
[Chorus]  
I'm all lost in the supermarket  
I can no longer shop happily  
I came in here for the special offer  
Guaranteed personality", 
        primary_tag: "Rock"
    },

    {
        title: "Pretty", 
        artist: "The Weeknd", 
        lyrics: "  
[Verse 1]  
Somebody told me it was pointless for me to come back  
Into your arms  
Said you fucked another man  
Finally, I knew this day would come  
Whoa oh oh  
Cause I see fear in your eyes  
You've been living out your life  
As long as you know that when I land you're mine  
It's been exactly 365 since I've seen your face  
I've been living on the road  
And you've been living all alone, at home  
Girl I hope, he made you satisfied (you did)  
Well baby I won't cry  
As long as you know that when I land you're mine  
  
[Hook]  
And you will never feel so pretty  
And you will never feel this beautiful  
When I make it there  
Oh when I make it there  
  
[Verse 2]  
There are certain things that I've come to understand  
Expectations can kill a simple man, a simple man  
I try to master the art, of that far away love  
But only so much can keep a woman warm  
Now it's times like this that I say to myself  
We've been living in a cold, cold world, cold world  
But at least I have you to rely  
Even if for a short time  
As long as you know when I land you're mine  
  
[Hook]  
And you will never feel so pretty  
And you will never feel this beautiful  
When I make it there  
Oh when I make it there  
And he can't make you feel this pretty  
No, he won't make you feel this beautiful  
When I make it there  
Oh when I make it there  
  
(Breakdown - The Weeknd harmonizing)  
  
[Hook]  
And you will never feel so pretty  
And you will never feel this beautiful  
When I make it there  
Oh when I make it there  
And he can't make you feel this pretty  
No, he won't make you feel this beautiful  
When I make it there  
Oh when I make it there  
And you will never feel so pretty  
And you will never feel this beautiful  
When I make it there  
Oh when I make it there  
And he can't make you feel this pretty  
No, he won't make you feel this beautiful  
When I make it there  
Oh when I make it there  
  
[Outro (French)]  
Quand une putain de colombe blanche chante sa chanson  
C'est tout ce qu'on entend  
Les jours se défilent comme de la ficelle dans le vent  
Embobiné dans ma toile, je les dévoile à nouveaux  
10 ans mon ami, que rien d'autre ne compte  
Elle n'était qu'une gamine à ce moment  
Souffrant d'un cœur brisé, une douleur très profonde  
C'est là où je l'ai aperçue, seule, prête à entamer ses 17 ans", 
        primary_tag: "R&B"
    },

    {
        title: "Redbone", 
        artist: "Childish Gambino", 
        lyrics: "  
[Verse 1]  
Daylight  
I wake up feeling like you won't play right  
I used to know, but now that shit don't feel right  
It made me put away my pride  
So long  
You made a nigga wait for some, so long  
You make it hard for boy like that to go on  
I'm wishing I could make this mine, oh  
  
[Pre-Chorus]  
If you want it, yeah  
You can have it, oh, oh, oh  
If you need it, ooh  
We can make it, oh  
If you want it  
You can have it  
  
[Chorus]  
But stay woke  
Niggas creepin'  
They gon' find you  
Gon' catch you sleepin', ooh  
Now stay woke  
Niggas creepin'  
Now don't you close your eyes  
  
[Verse 2]  
Too late  
You wanna make it right, but now it's too late  
My peanut butter chocolate cake with Kool-Aid  
I'm trying not to waste my time  
  
[Pre-Chorus]  
If you want it, oh  
You can have it, you can have it  
If you need it, you better believe in something  
We can make it, oh  
If you want it  
You can have it, ah  
  
[Chorus]  
But stay woke (Stay woke)  
Niggas creepin' (They be creepin')  
They gon' find you (They gon' find you)  
Gon' catch you sleepin' (Gon' catch you sleepin', put your hands up now, baby)  
Ooh, now stay woke  
Niggas creepin'  
Now, don't you close your eyes  
But stay woke (Ooh)  
Niggas creepin' (They gon' find you)  
They gon' find you  
Gon' catch you sleepin', ooh (Gon' catch you, gon' catch you)  
Now stay woke  
Niggas creepin'  
Now, don't you close your eyes  
  
[Outro]  
How'd it get so scandalous?  
Oh, how'd it get so scandalous?  
Oh, oh, baby you, how'd it get  
How'd it get so scandalous?  
How'd it get so scandalous?  
But stay woke  
But stay woke", 
primary_tag: "R&B"
},

{
title: "What's the Use?", 
artist: "Mac Miller", 
lyrics: "  
[Intro]  
Yeah  
  
[Chorus]  
You can love it, you can leave it  
They say you're nothin' without it  
Don't let them keep you down  
What if I don't need it?  
There's somethin' about it  
That just freaks me out  
I just want another minute wit' it, fuck a little  
What's the use?  
Never superficial, you gon' know it when it hit you  
Get a little sentimental when I'm off the juice  
  
[Verse 1]  
Yeah  
Okay, we're colder than the breeze  
But the breeze ain't flowin' like me, motherfucker, hol' up  
You don't need to hol' up, yeah  
And I can show you how I seem  
What it is, what it truly might be, nothin' that you know of  
You don't need to hol' up  
I'm so a-bove and beyond  
You take drugs to make it up way up where we on  
Space shuttle, Elon  
Time, we don't waste much, fuck when we wake up  
Then I have her sing just like Céline Dion  
Catch me if you can but, you'll never catch me, damn  
Whole lotta, \"Yes, I am\"  
All the way in wit' no exit plan  
Already left and the jet don't land  
Yeah, the time is tickin', come take a ride, get inside  
This is highly different, I'm talkin' fly, got a pilot wit' 'im, uh  
Can I mind my business?  
Why you trippin'? Give you somethin' that your eyes can witness  
Ooh, you're too close  
I don't understand why you doin' the most  
  
[Chorus: Mac Miller & Snoop Dogg]  
You can love it, you can leave it  
They say you're nothin' without it  
Don't let them keep you down  
What if I don't need it?  
There's somethin' about it  
That just freaks me out  
I just (I just) want a (Want a) 'nother ('Nother) minute (Minute) wit' it  
Fuck a little, what's the use?  
What's the use? (Use)  
Never (Never) super- (Super) -ficial (Ficial)  
You gon' (You gon') know it (Know it) when it (When it) hit you (Hit you)  
Get a (Get a) little (Little) senti- (Senti) -mental when I'm off the juice (Turn it up)  
  
[Verse 2]  
Well, I'ma give you what you came for, yeah  
Shit, I've worked too hard to have a clue who you are  
Set the bar so far above par, we can parlay all day  
Crib long range with the yard   
I know I should probably pray more but you gotta love me  
'Cause I save the day, spend money  
When I had nothin', shit, it wasn't so funny  
Made a promise to the homies nobody go hungry  
Look how far we came, still they throwin' dirt on my name  
But it never worry my brain  
Heads turnin' like a hurricane swervin'  
Tell the sun, \"Get up outta my shade\"  
If they don't get the picture, cut 'em outta that frame, shit  
I'm up thirty thou' miles plus change  
It's been a while but I'm down 'til I'm out  
And it is what it is 'til it ain't, yeah  
  
[Bridge: Thundercat]  
Ooh-oh, oh-oh-oh-oh-oh  
Ooh, I just wanna fly  
Ah-ah-ah-ah-ha  
  
[Chorus: Mac Miller & Snoop Dogg]  
You can love it, you can leave it  
They say you're nothin' without it  
Don't let them keep you down  
What if I don't need it?  
There's somethin' about it  
That just freaks me out  
I just (I just) want a (Want a) 'nother ('Nother) minute (Minute) wit' it  
Fuck a little, what's the use?  
What's the use? (Use)  
Never (Never) super- (Super) -ficial (Ficial)  
You gon' (You gon') know it (Know it) when it (When it) hit you (Hit you)  
Get a (Get a) little (Little) senti- (Senti) -mental when I'm off the juice (Juice)  
  
[Outro: Snoop Dogg]  
You can love it  
It just freaks me out", 
        primary_tag: "Hip-Hop" 
    },

    {
        title: "The Climb Back", 
        artist: "J. Cole", 
lyrics: "  
[Intro]  
Are you doin' this work to facilitate growth or to become famous?  
Which is more important?  
Getting or letting go?  
You can do anything, anything you can do (You can do anything)  
You can do anything, anything you can do (You can do anything)  
  
[Chorus]  
Everything come back around full circle  
Why do lies sound pleasant, but the truth hurtful?  
Everybody gotta cry once in a while  
But how long will it take 'fore you smile?  
This is that come-back-to-life shit  
My niggas pick me up and we gon' light the city up as if the sun had the night shift  
And paint the town red for my nigga found dead too soon (Bitch, I'm back out...)  
  
[Verse 1]  
Yeah  
To the left of that decimal, I need seven figures to play the joint  
Turn up your decibels, peep how I decimate a joint  
Check out my projects like them workers that Section 8 appoints  
And you'll see how I flipped like exclamation points  
My niggas shoot first as if they never played the point, more two guards  
Enough straps to fill four U-Hauls  
More death than World War II caused  
Around these parts we pour the brown just to drown these thoughts  
Of black corpses in county morgues, Lord, those images hauntin'  
I ain't been asleep yet, it's ten in the mornin'  
I'm sendin' a warnin', a problem with me is like the BET Hip-Hop Awards  
I'm startin' to see you niggas don't want it  
I'm sick of this flauntin', from niggas I know for sure ain't got mo' dough than Cole  
Trash rappers, ass backwards, tryna go toe-to-toe  
We laugh at ya, staff strapped up on top the totem pole to blast at ya  
Bassmasters, look how they tote a pole  
Gotta know the ropes and the protocol  
Or they gon' for sure blow your clothes half off like a promo code  
Made a lil' tune called \"Foldin Clothes,\" and a nigga still ain't known to fold under pressure  
Well, you know what Cole do  
Make a diamond, they just rhymin', me, I'm quotin' gold  
One phone call get you canceled like a homophobe in this PC culture  
Address me as the G.O.A.T. like they call Chief Keef Sosa  
In my sectional like a fuckin' three-piece sofa  
I'm known as the chosen one  
Another dead body lay frozen, that's how it go sometimes  
When niggas weighin' coke and not the pros and cons  
Well, I ain't with that sleepin' underground like a gopher, so I go for mines  
  
[Chorus]  
Everything come back around full circle (Nigga, gotta go for mines)  
Why do lies sound pleasant, but the truth hurtful? (Yeah)  
Everybody gotta cry once in a while  
But how long will it take 'fore you smile?  
This is that come-back-to-life shit  
My niggas pick me up and we gon' light the city up as if the sun had the night shift  
And paint the town red for my nigga found dead too soon  
Now I know why they call it blue moon (Yeah)  
  
[Verse 2]  
Survival at all costs, every day, niggas get logged off  
Bodies get hauled off  
Passin' a funeral procession while holdin' my breath in the car, I thought  
At times, it be feelin' the devil be winnin' but do that mean God lost?  
Just got off the phone with my nigga, he back in the kennel, my dog lost  
I brought him 'round close to me before but he  
Became addicted to clout and all the hoes we'd meet  
I slowly peeped jealousy on his breath whenever he spoke to me  
Like on the low, he feelin' that in my shoes is where he supposed to be  
I tried to ignore the signs, but they're in the back of my mind  
It felt like lettin' a nigga come sleep on your couch and he eatin' up all yo' groceries  
My nigga repeated this quote to me, I felt its potency  
Said, \"Most of these niggas gon' hang themselves, just give 'em the rope and see\"  
Shit, I heeded that, and what got showed to me  
Was screamin' that, some niggas, you gotta leave 'em back  
Unfortunately we seen the trap  
Niggas be on that demon clock resultantly  
They fiend to clap as often as the Genius app misquotin' me, uh  
Meanwhile, I see that yo' diamonds is glistenin'  
I'm glad that you shinin', but need I remind you my niggas is dimin' and nickelin'?  
Scrapin' up whatever coin they can find, the pettiest crime, they committin' it  
Just to get by for a limited time, the steepest of mountains, they tryin' to climb  
I'm here tryna find the derivative, you niggas don't feel me  
You see the clout, you don't see the real me  
If I was sick, you niggas wouldn't heal me  
Therefore I'm healin' myself, gettin' in tune with my God  
Slowly revealin' myself, buildin' my wealth  
A nigga touch mine, I'ma kill 'em myself, trust me  
  
[Chorus]  
Everything come back around full circle  
Why do lies sound pleasant, but the truth hurtful?  
Everybody gotta cry once in a while  
But how long will it take 'fore you smile?  
This is that come-back-to-life shit  
My niggas pick me up and we gon' light the city up as if the sun had the night shift  
And paint the town red for my nigga found dead too soon  
Now I know why they call it blue moon (Yeah)  
  
[Outro]  
Bitch, I'm back outside, nigga  
I'm back outside  
I'm back outside  
Bitch, I'm back outside  
Everybody mentions suicide prevention  
Man, they even made a hotline  
To call up when there's tension, but I got a question  
What about a fuckin' homicide?  
Need a number for my niggas to call  
Whenever there's a urge to get triggers involved  
Need a number for my niggas to call  
Whenever there's a urge to get triggers involved", 
        primary_tag: "Hip-Hop"
    },

    {
        title: "Ring Ring", 
        artist: "Juice WRLD", 
        lyrics: "  
[Intro: Juice WRLD]  
I don't feel like comin' to the phone today  
I wish everyone would leave me alone  
I don't feel like comin' to the phone today  
  
[Chorus: Juice WRLD]  
Ring, ring-ring  
I don't feel like comin' to the phone today  
Everyone should just leave me alone  
I don't feel like comin' to the phone today  
But I don't feel like bein' alone  
I can't deal with the chills on my own  
Freezin' all night long  
I can't tell what's real or where I belong  
  
[Verse 1: Juice WRLD]  
Uh, day-to-day same thoughts  
This is all the devil's fault  
I ain't mean to name drop  
Off three, I pop, all three, I'm off, all three  
Should make it four like the rings on my Audi  
Xans with the Everclear got me seein' foggy  
Ironic how somethin' clear got me seein' foggy  
Something ain't right 'bout the pills but I bought them  
Something ain't right with my mind so I lost it  
Drugs turn my knob, then I run, that's a faucet  
But it ain't water, it's wine  
I'm tired, I'm tired of gettin' high, it's exhausting  
I was told it gets better with time  
  
[Chorus: Juice WRLD]  
Ring, ring-ring  
I don't feel like comin' to the phone today  
Everyone should just leave me alone  
I don't feel like comin' to the phone today  
But I don't feel like bein' alone  
I can't deal with the chills on my own  
Freezin' all night long  
I can't tell what's real or where I belong  
  
[Verse 2: Clever]  
I don't feel like comin' to the phone today  
Unless a Postmates' comin' on the way  
But my cellphone isn't well-known  
Go the hell on  
\"Pretty please, get me these  
Buy me this, buy me that,\" bitch, hit your knees  
I wasn't prepared for a guest  
I'm aware of the stress, I don't care to impress  
Can't you see that I am high on drugs?  
And low on the sleep  
I just wanna go somewhere and count my sheep  
I'm tired, I'm tired  
Gettin' high is exhausting  
But I was told it gets better with time  
  
[Chorus: Juice WRLD]  
Ring, ring-ring  
I don't feel like comin' to the phone today  
Everyone should just leave me alone  
I don't feel like comin' to the phone today  
But I don't feel like bein' alone  
I can't deal with the chills on my own  
Freezin' all night long  
I can't tell what's real or where I belong", 
        primary_tag: "Hip-Hop"
    },

    {
        title: "Doin' It Right (feat. Panda Bear)", 
        artist: "Daft Punk", 
        lyrics: "  
[Hook: Daft Punk]  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
  
[Chorus: Panda Bear]  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
  
[Post-Chorus: Panda Bear]  
If you lose your way tonight  
That's how you know the magic's right  
That's how you know the magic's right  
  
[Hook: Daft Punk]  
Doing it right  
Everybody will be dancing  
And we'll feeling it right  
Everybody will be dancing  
And be doing it right  
Everybody will be dancing  
When we're feeling all right  
Everybody will be dancing tonight  
  
[Chorus: Panda Bear]  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
  
[Post-Chorus: Panda Bear]  
If you lose your way tonight  
That's how you know the magic's right  
If you lose your way tonight  
That's how you know the magic's right  
  
[Chorus: Panda Bear]  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
If you do it right  
Let it go all night  
Shadows on you break  
Out into the light  
  
[Post-Chorus: Panda Bear]  
If you lose your way tonight  
That's how you know the magic's right  
If you lose your way tonight  
That's how you know the magic's right  
If you lose your way tonight  
That's how you know the magic's right  
  
[Outro: Panda Bear]  
If you lose your way ton  ight
That's how you know the magic's right", 
        primary_tag: "Electronic"  
    },

    {
        title: "Headlines", 
        artist: "Drake", 
        lyrics: "  
[Produced by Boi-1da and Noah \"40\" Shebib]  
  
[Verse 1]  
I might be too strung out on compliments  
Overdosed on confidence  
Started not to give a fuck and stopped fearin' the consequence  
Drinkin' every night because we drink to my accomplishments  
Faded way too long, I'm floatin' in and out of consciousness  
And they sayin' I'm back, I'd agree with that  
I just take my time with all this shit, I still believe in that  
I had someone tell me I fell off, ooh, I needed that  
And they want to see me pick back up, well, where'd I leave it at?  
I know I exaggerated things, now I got it like that  
Tuck my napkin in my shirt ‘cause I'm just mobbin' like that  
You know good and well that you don't want a problem like that  
You gon' make someone around me catch a body like that  
No, don't do it (Ayy), please don't do it (Ayy)  
‘Cause one of us goes in, and we all go through it (Ayy)  
And Drizzy got the money, so Drizzy gonna pay it  
Those my brothers, I ain't even gotta say it  
That's just something they know  
  
[Chorus]  
They know, they know, they know (They know, ayy)  
They know, they know, they know  
They know, they know, they know  
Yeah, they know, yeah  
That the real is on the rise  
Fuck them other guys  
I even gave 'em a chance to decide  
Now it's something they know  
They know, they know, they know  
  
[Verse 2]  
Yeah!  
I be yellin' out, \"Money over everything! Money on my mind!\"  
Then she wanna ask when it got so empty  
Tell her I apologize, happened over time  
She says, \"They miss the old Drake\", girl don't tempt me  
\"If they don't get it, they'll be over you  
That new shit that you got is overdue  
You better do what you supposed to do\"  
I'm like, \"Why I gotta be all that?\"  
But still I can't deny the fact that it's true  
Listening to you expressin' all them feelings  
Soap opera rappers, all these niggas sound like All My Children  
And that's who you thinkin' is 'bout to come and make a killin'  
I guess it really is just me, myself and all my millions  
You know that they ain't even got it like that  
You gon' hype me up and make me catch a body like that  
‘Cause I live for this, it isn't just a hobby like that  
When they get my shit and play it  
I ain't even gotta say it, they know  
  
[Chorus]  
They know, they know, they know (They know)  
They know, they know, they know  
They know, they know, they know  
Yeah, they know, yeah  
That the real is on the rise  
Fuck them other guys  
I even gave 'em a chance to decide  
Now it's something they know  
They know, they know, they know  
  
[Outro]  
I be yelling out \"Money over everything!\"  
\"Money on my mind, mind, mind-mind!\"  
Tell them I apologize, it happened over time, time, time-time  
They know  
They know, they know, they know  
They know, they know, they know  
They know, they know, they know  
Yeah…  
  
[Outro Poem]  
I heard once that they would rather hear about memories than enemies  
Rather hear what was or what will be than what is  
Rather hear how you got it over how much it cost you  
Rather hear about findin' yourself than how you lost you  
Rather you make this an open letter  
About family, and struggle, and it takin' forever  
About hearts that you've broken, and ties that you've   severed
No doubt in my mind, that'll make them feel better", 
        primary_tag: "Hip-Hop"
    },

    {
        title: "Interlude (That's Love)",
        artist: "Chance the Rapper",
        lyrics: "
[Intro]  
Yeah, yeah, yeah, yeah  
Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah  
Yeah  
Yeah, yeah, yeah, yeah, yeah, yeah  
Yeah, yeah, yeah, yeah, yeah yeah, yeah, yeah, yeah  
  
[Verse]  
What's better than tripping is falling in love  
What's better than Letterman, Leno, Fallon, and all the above  
What's better than popping bottles trying to ball in the club  
Is the first caveman pops with his son, ball and a club  
What's better than paper is ballin' it up  
What's better than followers is actually fallin' in love  
What's better than frolicking, follies, fallin' in mud  
Rolling in green pastures, wanderin', followin' love  
What's better than eating is feeding your fam  
What's better than meetings is missing meetings to meet with your fam  
What's better than leaning and needing a Xan  
Is hitting your xan dreaming a dream could mean leaving the land  
What's better than yelling is hollerin' love  
What's better than rhymes, nickels, dimes and dollars and dubs  
Is dialing up your darling just for callin' her up  
It ain't nothing better than fallin' in love  
Igh  
  
[Chorus]  
I've seen it come back, back, back and forth  
You hit the nail right on top of the head  
I know you've seen it all before  
But when it looks you in the eyes  
It ain't nothin' you could say but \"That's love\"  
That's love  
That's love  
That's love  
Say that's love, ooh, ooh  
That's love  
That's love, that's love, that's love  
I love you (You love who?)  
I love you (Tell 'em who you love)  
I love you (You love who?)  
I love you (Yeah)  
I love you (Sing it right now)  
I love you (Love)  
I love you (Who do you love?)  
I love you (Love)  
I love you  
That's love  
That's love, that's love  
Say that's love, ooh, ooh, that's love (Love)  
That's love, that's love, that's love, that's love, igh",
    primary_tag: "Hip-Hop"
    },
    {
        title: "Karma Police",
        artist: "Radiohead",
        lyrics:
"[Verse 1]  
Karma police, arrest this man  
He talks in maths, he buzzes like a fridge  
He's like a detuned radio  
Karma police, arrest this girl  
Her Hitler hairdo is making me feel ill  
And we have crashed her party  
  
[Chorus]  
This is what you'll get  
This is what you'll get  
This is what you'll get  
When you mess with us  
  
[Verse 2]  
Karma police, I've given all I can  
It's not enough, I've given all I can  
But we're still on the payroll  
  
[Chorus]  
This is what you'll get  
This is what you'll get  
This is what you'll get  
When you mess with us  
  
[Outro]  
For a minute there  
I lost myself, I lost myself  
Phew, for a minute there  
I lost myself, I lost myself  
For a minute there  
I lost myself, I lost myself  
Phew, for   a minute there
I lost myself, I lost myself",
        primary_tag: "Rock"
    },
    {
        title: "Tokyo Drifting",
        artist: "Glass Animals",
        lyrics: "
[Intro: Denzel Curry]  
Driftin'  
Huh, huh, huh, Tokyo driftin'  
  
[Verse 1: Dave Bayley]  
Two things 'bout the geez, you better listen up  
Chrome spokes with the spinners on his tire hubs  
Suck smoke in his '40, windows up  
He rolls, like he really doesn't give a-  
Drug lust and two packets in your pocket  
Disco dust hits your nose like a rocket  
  
[Bridge: Dave Bayley]  
Doo-doo-doo, doo, doo-doo-doo-doo-doo  
Doo-doo-doo, doo, doo-doo-doo-doo-doo  
  
[Verse 2: Dave Bayley]  
Scoot-scoot, boy, race out to the super-club  
Let it rip like you drank all of the tequila  
Get loose, street fighter, tear it up  
Fresh footwear drippin' out of you onto the rug  
  
[Chorus: Dave Bayley & Denzel Curry]  
Ooh, now you're lettin' go  
Heart beatin' faster, feet pushin' on the floor  
Ain't nothin' better  
Ooh, now you're lettin' go  
Heart beatin' faster, feet pushin' on the floor  
Ain't nothin' better  
Wavey Davey's on fire  
You still got it, you still got it alright, yeah (Huh, huh)  
Wavey Davey's on fire  
Oh, you still got it, you still got it alright, yeah (Huh, huh)  
Huh, huh  
Huh, huh  
Huh, huh  
  
[Verse 3: Denzel Curry]  
Ayy, what is everybody talkin' 'bout?  
When they wanna live fast, but I'd rather walk it out  
Niggas wanna talk about a G  
But I spent a G on the twelve teeth in my mouth (Huh, huh, huh)  
Diamonds aquatic, it feel like a trout on my wrist (Wrist)  
Or a spout on my wrist with a spider up in it (In it)  
Everything gotta be eighty and you keep the twenty percentage  
You know that I get it, I'm on it, I'm in it  
If you try to take it, the clip get extended  
I'm back on my bullshit, like Jordan on Pippen  
If this is my life then I'm Tokyo drifting (Uh)  
  
[Chorus: Dave Bayley & Denzel Curry]  
Ooh, now you're lettin' go  
Heart beatin' faster, feet pushin' on the floor (Yeah, oh)  
Ain't nothin' better  
Ooh, now you're lettin' go  
Heart beatin' faster, feet pushin' on the floor  
Ain't nothin' better  
Wavey Davey's on fire (Yuh, yuh, yuh, okay)  
You still got it, you still got it alright, yeah (Huh, huh, huh)  
Wavey Davey's on fire (Yuh, yuh, yuh, okay)  
You still got it, you still got it alright, yeah (Huh, huh, huh)  
Driftin'  
Yeah  
Yeah, Tokyo driftin'  
  
[Outro: Dave Bayley & Denzel Curry]  
Wavey Davey's on fire  
You still got it, you still got it al—  
You still, you still got it al—  
You still, you still got it alright, yeah (Driftin')",
        primary_tag: "Rap"
    },
    {
        title: "Yoshimi Battles the Pink Robots Part 1",
        artist: "The Flaming Lips",
        lyrics: 
"[Verse 1]  
Her name is Yoshimi  
She's a black belt in karate  
Working for the city  
She has to discipline her body  
  
[Pre-Hook 1]  
Cause she knows that  
It's demanding  
To defeat those evil machines  
I know she can beat them  
  
[Hook]  
Oh Yoshimi, they don't believe me  
But you won't let those robots eat me  
Yoshimi, they don't believe me  
But you won't let those robots defeat me  
  
[Verse 2]  
Those evil-natured robots (I'll get you, Yoshimi)  
They're programmed to destroy us  
She's gotta be strong to fight them  
So she's taking lots of vitamins  
  
[Pre-Hook 2]  
Cause she knows that  
It'd be tragic  
If those evil robots win  
I know she can beat them  
  
[Hook]  
Oh Yoshimi, they don't believe me  
But you won't let those robots defeat me  
Yoshimi, they don't believe me  
But you won't let those robots eat me  
  
[Break]  
Yoshimi  
  
[Pre-Hook 2]  
Cause she knows that  
It'd be tragic  
If those evil robots win  
I know she can beat them  
  
[Hook]  
Oh Yoshimi, they don't believe me  
But you won't let those robots defeat me  
Yoshimi, they don't believe me  
But you won't let those robots defeat me  
Oh Yoshimi, they don't believe me  
But you won't let those robots eat me  
Yoshimi, they don't believe me  
But you won't let those robots eat me  
Yoshimi",
        primary_tag: "Rock"
    },
    {
        title: "In the Aeroplane Over the Sea",
        artist: "Neutral Milk Hotel",
        lyrics: 
"[Verse 1]  
What a beautiful face  
I have found in this place  
That is circling all 'round the sun  
What a beautiful dream  
That could flash on the screen  
In a blink of an eye and be gone from me  
Soft and sweet  
Let me hold it close and keep it here with me  
  
[Verse 2]  
And one day we will die  
And our ashes will fly  
From the aeroplane over the sea  
But for now we are young  
Let us lay in the sun  
And count every beautiful thing we can see  
Love to be  
In the arms of all I'm keeping here with me  
  
[Verse 3]  
What a curious life  
We have found here tonight  
There is music that sounds from the street  
There are lights in the clouds  
Anna's ghost all around  
Hear her voice as it's rolling and ringing through me  
Soft and sweet  
How the notes all bend and reach above the trees  
  
[Bridge]  
Now how I remember you  
How I would push my fingers through  
Your mouth to make those muscles move  
That made your voice so smooth and sweet  
But now we keep where we don't know  
All secrets sleep in winter clothes  
With the one you loved so long ago  
Now he don't even know his name  
  
[Verse 4]  
What a beautiful face  
I have found in this place  
That is circling all 'round the sun  
And when we meet on a cloud  
I'll be laughing out loud  
I'll be laughing with everyone I see  
Can't believe  
How strange it is to be anything at all",
        primary_tag: "Rock"
    },
    {
        title: "This Year",
        artist: "The Mountain Goats",
        lyrics: "
[Verse 1]  
I broke free on a Saturday morning  
I put the pedal to the floor  
Headed north on Mills Avenue  
And listened to the engine roar  
  
[Verse 2]  
My broken house behind me  
And good things ahead  
A girl named Cathy  
Wants a little of my time  
Six cylinders underneath the hood  
Crashing and kicking  
Aha! Listen to the engine whine  
  
[Chorus]  
I am going to make it through this year  
If it kills me  
I am going to make it though this year  
If it kills me  
  
[Verse 3]  
I played video games in a drunken haze  
I was seventeen years young  
Hurt my knuckles punching the machines  
The taste of Scotch rich on my tongue  
  
[Verse 4]  
And then Cathy showed up  
And we hung out  
Trading swigs from a bottle  
All bitter and clean  
Locking eyes  
Holding hands  
Twin high maintenance machines  
  
[Chorus]  
I am going to make it through this year  
If it kills me  
I am going to make it though this year  
If it kills me  
  
[Verse 5]  
I drove home in the California dusk  
I could feel the alcohol inside of me hum  
Pictured the look on my stepfather's face  
Ready for the bad things to come  
  
[Verse 6]  
I down shifted  
As I pulled into the driveway  
The motor screaming out  
Stuck in second gear  
The scene ends badly  
As you might imagine  
In a cavalcade of anger and fear  
There will be feasting and dancing  
In Jerusalem next year  
  
[Chorus]  
I am going to make it through this year  
If it kills me  
I am going to make it though this year  
If it kills me",
    primary_tag: "Rock"
    },
    {
        title: "Tattoos fade",
        artist: "The World/Inferno Friendship Society",
        lyrics: "
There are rumors going around  
You can feel history coming about  
You're never sure just where it's going to stay  
You suffer through lingering doubt  
You wish someone would spell it out  
But things don't work that way  
There's so much going on, faces in the crowd  
Belong to a team on which you'd love to play  
You're hoping for some permanence  
But there really is no place for this  
Your tattoos, they're gonna fade!  
They're gonna fade!  
They're gonna fade!  
They're gonna fade!  
  
Our youth like wax drips down  
In puddles around our legs  
It hardens and catches us to the quick  
You're putting a lot of importance in  
Something you're really just playing a part in  
You should take what action you can get  
What you're sure you're carving in stone  
On your flesh  
You'd do better living more and commemorating less  
There's much I don't want to remember  
There's not a thing I'd wish last forever  
You're tattoos are gonna fade!  
They're gonna fade!  
They're gonna fade!  
They're gonna fade!  
  
It's not as important to persevere as to doubt  
When you're so angry, nothing matters  
You be brave 'cause everything counts, and  
I'd never be so unsubtle  
As to write this on my sleeve  
Unless I was sure I could change it  
When I was ready to leave  
There's much I don't want to remember  
There's not a thing I would wish last forever  
Or let me put this another way:  
I know you're hoping for some permanence  
But there really is no truth to this  
Your tattoos, they're gonna fade",
        primary_tag: "Cabaret/Punk"
    },
    {
        title: "Finish Line / Drown",
        artist: "Chance the Rapper feat. T‐Pain, Kirk Franklin, Eryn Allen Kane & Noname",
        lyrics: "
[Part I: \"Finish Line\"]

[Intro: Eryn Allen Kane & Chance The Rapper]
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
And we back, and we back, and we back, and we back
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
And we back, and we back, and we back

[Verse 1: Chance The Rapper]
They ain't teaching taxes in school
It don't even matter, I was acting a fool
But who would think the raps would turn into racks?
Don't matter, matter fact, it could happen to you
Scars on my head, I'm the boy who lived
The boy love playing when the boy too sick
Reclining on a prayer, I'm declining to help
I've been lying to my body can't rely on myself, oh no
Last year got addicted to Xans
Started forgetting my name and started missing my chance
L.A. for four months, end up leaving right back
I'm in love with my city, bitch, I sleep in my hat, uh
I felt hogtied ever since my dog died
He lived to 84, damn, that's a long ride
I know he up there, he just sit and he wait
I'll be racing up the stairs, I'ma get to the gate singing

[Bridge: Eryn Allen Kane]
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do

[Chorus: T-Pain]
Oh, all my days
I prayed and prayed
And now I see the finish line
Oh, I'm gonna finish mine, yeah
All my days
I prayed and prayed
And now I see the finish line
Gonna finish mine, yeah-eah

[Verse 2: Chance The Rapper]
Hey! Gimme the water, gimme the water
I need the kind from Space Jam
Get this money, get this budget, KOK to day camp
Me and my girl plan to stay to the end
Hope there never come a day where we be better as friends
We in a marathon we could build a marriage on
Arguments as parents digging deeper than a baritone
I've been getting blocked just trying to make songs with friends
Labels told me to my face that they own my friends
I got to pray, I got to pray, like Hammer after \"2 Legit\"
I got the power, I could poke Lucifer with crucifix
I cannot scrape om stupid shit, I stand up like I'm Ludacris
I know some folks that talk so much
You'd think they drive an Uber whip, damn
Queen said, \"Why we in a queen bed?\"
I said, \"It's yours, don't worry, lil' beanhead\"
I'm just here to catch my breath, I got a world tattoo
She said, \"Cool, just bring me some food\"

[Chorus: T-Pain]
Oh, all my days
I prayed and prayed
And now I see the finish line
Oh, I'm gonna finish mine, yeah
All my days
I prayed and prayed
And now I see the finish line
I'm gonna finish mine, yeah-eah

[Bridge: Eryn Allen Kane]
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do-do-do
Do-do-do-do-do

[Part II: \"Drown\"]

[Intro: Eryn Allen Kane]
The water may be deeper than it's ever been

[Verse 1: Noname]
Lord rain down on me so I can move on water
Like children at the altar, like God inside my house
I love you, I love you, you looking holy like Mama
You made a church out of feathers, so when she fly to the Father
She know the choir gon' follow and all the offering paid
She gave my name away to your holy house
She like my blessings in disguise
She like her Jesus mountain high
So He can watch her lonely child, I know my God
I know my God seen His breaks and His edges
Are jagged for giving that pain to His city in gold
Like everything is everything
Like all them days He prayed with me
Like emptiness was tamed in me
And all that was left was His love
And all that was left was His love
And all that was left was His love
And all that was left was His love

[Chorus: Choir]
Never, never drown
The water may be deeper than it's ever been
Never drown
The water may be deeper than it's ever been
Never drown

[Verse 2: Choir & Kirk Franklin]
Never, never, never (Chance, let me in, come on)
This thirst in my soul (There's a thirst in my soul, it tell me)
Where else can I go? (Where?) but You? (Come on)
I may cry a river (I may cry a thousand tears, but)
But You take each drop and You wash (You wash me new)
Me new (People sing)
This water is deep (Yes, yes and I need You to)
Jesus, rescue me (Come on, save me, I need You to)
Take me to Your mountain (Hallelujah)
So someday Chicago will be free (Someday, we'll all be free)
Be free (Say)

[Chorus: Choir]
The water may be deeper than it's ever been
Never drown
The water may be deeper than it's ever been
Never drown",
    primary_tag: "Rap"
    },
    {
        title: "Cinderella (feat. Ty Dolla $ign)",
        artist: "Mac Miller",
        lyrics: "
[Part I: Cinderella]  
  
[Intro: Ty Dolla $ign]  
Uh, $ign  
Oh no, no, no, no, no, no, no, no, no  
No, no ($ign)  
Ayy  
  
[Chorus: Ty Dolla $ign]  
I been waitin' all night for this moment  
I been waitin' all year for this moment  
I been picturin' you takin' off your clothes for me  
I been literally curvin' all these hoes for you  
Daddy told you, better bring your ass home  
Cinderella, better get your ass home  
Man, I swear that parents just don't understand  
You ain't gotta be old to be a man  
Take my hand, come with me  
To my room (My room)  
Girl, I got a suite at the SLS (SLS), uh  
I already know you got expensive taste (Yeah)  
Ayy, take my hand (My hand), follow me (Follow me)  
To my room  
Tell your little friends you gon' be alright  
Girl, I got a plan for the whole night  
  
[Verse 1: Mac Miller]  
Okay, your legs just like  
A store: they open up and you got people in line  
Been there every night for weeks at a time  
You in my dreams, that's why I sleep all the time  
Just to hear you say I love you, just to touch you, just to leave you behind  
I told you, you don't have to worry, you'll be fine  
This type of thing, I heard it happen all the time  
Yeah, I just wanna see you fly  
Because your fragrance got me faded, you be keepin' me high  
Said nothin' better than the first time  
I'll be at your service like the check-in at curbside  
You don't have to spend another second on this Earth dry  
Wet you like [?], go a second and a third time  
Left you a perverse mind  
And when you hungry, I can chef you up a stir fry  
Get you some dessert wine, elevate ya third eye  
First prize, Nobel, get a piece  
Your clothes off, turn around, lemme see  
  
[Chorus: Ty Dolla $ign]  
I been waitin' all night for this moment  
I been waitin' all year for this moment  
I been picturin' you takin' off your clothes for me  
I been literally curvin' all these hoes for you  
Daddy told you, better bring your ass home  
Cinderella, better get your ass home  
Man, I swear that parents just don't understand  
You ain't gotta be old to be a man  
Take my hand, come with me  
To my room  
Girl, I got a suite at the SLS, uh  
I already know you got expensive taste (Uh)  
Take my hand, follow me  
To my room  
Tell your little friends you gon' be alright  
Girl, I got a plan for the whole night  
  
[Verse 2: Mac Miller]  
Yeah, okay  
I came up with a plan, it was take you by the hand  
And bring you somewhere where the sand is, soon as we landed  
We went straight into the room and played the music  
Started dancin', you was takin' off your pants  
It look like Dorothy ain't in Kansas anymore, I do you like a chore  
We started on the bed and then we movin' to the floor  
You started gettin' crazy, told me fuck you like a whore  
I thought you was an angel, now you yellin' to the Lord  
You used to tell me all the time I ain't ya type  
Now you always wanna spend the night  
Now I'm doin' everything you like  
When I'm inside your pussy, damn, it feels so right (Yeah)  
But I still respect ya game, every time I'm out-of-line  
You always set me straight, the sex is great, for Heaven's sakes  
I need it every day, I yell your name, Cinderella  
Never gonna find nobody better, all my life...  
  
[Chorus: Ty Dolla $ign]  
I been waitin' all night for this moment  
I been waitin' all year for this moment  
I been picturin' you takin' off your clothes for me  
I been literally curvin' all these hoes for you  
Daddy told you, better bring your ass home  
Cinderella, better get your ass home  
Man, I swear that parents just don't understand  
You ain't gotta be old to be a man  
Take my hand, come with me  
To my room  
Girl, I got a suite at the SLS, uh  
I already know you got expensive taste, uh  
Take my hand, follow me  
To my room  
Tell your little friends you gon' be alright  
Girl, I got a plan for the whole night, ayy  
  
[Guitar Solo: Jeff “Gitty” Gitelman]  
  
[Part II: Right After Love]  
  
[Verse 1: Mac Miller]  
Hey now, I'm sayin'  
My only way out is a way in  
I won't stop  
'Til you mine, no way  
Well, all my days now, they changin'  
I got an angels, no more Satan  
Looks like God's on my side  
This time, yeah  
  
[Refrain: Mac Miller]  
Been meanin' to tell ya  
You lookin' better every day  
Write you letters, it's only right that  
Right after love, I write my name, yeah  
If it's forever or never, it's all the same  
Under the weather, feel much better  
When that weather isn't rain, yeah  
  
[Verse 2: Mac Miller]  
Ooh, Cinderella  
Don't you run out of time  
It feels like you've been takin'  
All day, yeah  
Well, wherever you came from, wherever you goin'  
I promise I'm not far behind, yeah  
So don't you dare throw this away  
  
[Refrain: Mac Miller]  
I been meanin' to tell ya  
You look better every day  
Write you letters, it's only right that  
Right after love, I write my name, yeah  
And if it's forever or never, it's all the same  
Under the weather, feel much better  
When that weather isn't rain",
        primary_tag: "Rap"
    },
    {
        title: "Chum",
        artist: "Earl Sweatshirt",
        lyrics: "
[Chorus]  
Something sinister to it, pendulum swinging slow  
A degenerate moving through the city with criminals, stealth  
Welcome to enemy turf, harder than immigrants work  
\"Golf\" is stitched into my shirt  
Get up off the pavement, brush the dirt up off my psyche  
Psyche, psyche  
  
[Interlude]  
Can I get that, oh… let me get that beat in my headphones, louder  
  
[Verse 1]  
It's probably been 12 years since my father left  
Left me fatherless  
And I just used to say I hate him in dishonest jest  
When honestly I miss this nigga, like when I was six  
And every time I got the chance to say it I would swallow it  
Sixteen, I'm hollow, intolerant, skip shots  
I storm that whole bottle, I'll show you a role model  
I'm drunk, pissy, pissing on somebody front lawn  
Trying to figure out how and when the fuck I missed moderate  
Momma often was offering peace offerings  
Think, wheeze cough, scoffing and he's off again  
Searching for a big brother, Tyler was that  
And plus he liked how I rap, the blunted mice in the trap  
Too black for the white kids, and too white for the blacks  
From honor roll to cracking locks up off them bicycle racks  
I'm indecisive, I'm scatterbrained, and I'm frightened  
It's evident in them eyes, where he hiding all them icicles at  
  
[Chorus]  
Something sinister to it, pendulum swinging slow  
A degenerate moving through the city with criminals, stealth  
Welcome to enemy turf, harder than immigrants work  
\"Golf\" is stitched into my shirt  
Get up off the pavement, brush the dirt up off my psyche  
Psyche, psyche  
  
[Interlude]  
Can I get that, oh… let me get that beat in my headphones, louder  
  
[Verse 2]  
Uh… time lapse, bars rotten, heart's bottomless pit  
Was mobbin' deep as '96 Havoc and Prodigy did  
We were the pottymouth posse crash the party and dip  
With all belongings then toss em out to the audience  
Nothing was fucking awesome  
Trying to make it from the bottom  
His sins feeling as hard as Vince Carter's knee cartilage is  
Supreme garment and weed gardeners garnishing spliffs  
With Keef particles and entering apartments with 'zine article  
Tolerance for boundaries, I know you happy now  
Craven and these Complex fuck niggas done track me down  
Just to be the guys that did it, like, \"I like attention\"  
Not the type where niggas trying to get a raise at my expense  
Supposed to be grateful, right?  
Like, \"Thanks so much,\" you made my life harder  
And the ties between my mom and I are strained and tightened  
Even more than they were before all of this shit  
Been back a week and I already feel like calling it quits  
  
[Chorus]  
Something sinister to it, pendulum swinging slow  
A degenerate moving through the city with criminals, stealth  
Welcome to enemy turf, harder than immigrants work  
\"Golf\" is stitched into my shirt  
Get up off the pavement, brush the dirt up off my psyche  
Psyche, psyche  
  
[Outro]  
Can I get that, oh… let me get that beat in my headphones, louder",
        primary_tag: "Rap"
    },
    {
        title: "I feel it coming",
        artist: "The Weeknd",
        lyrics: "
[Intro: The Weeknd]  
Yeah, uh  
  
[Verse 1: The Weeknd]  
Tell me what you really like  
Baby, I can take my time  
We don't ever have to fight  
Just take it step-by-step  
I can see it in your eyes  
'Cause they never tell me lies  
I can feel that body shake  
And the heat between your legs  
  
[Pre-Chorus: The Weeknd]  
You've been scared of love and what it did to you  
You don't have to run, I know what you've been through  
Just a simple touch and it can set you free  
We don't have to rush when you're alone with me  
  
[Chorus: The Weeknd]  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
  
[Verse 2: The Weeknd]  
You are not the single type  
So baby, this the perfect time  
I'm just tryna get you high (I'm just tryna, babe)  
And faded off this touch  
You don't need a lonely night  
So baby, I can make it right  
You just got to let me try  
To give you what you want  
  
[Pre-Chorus: The Weeknd]  
You've been scared of love and what it did to you  
You don't have to run, I know what you've been through  
Just a simple touch and it can set you free  
We don't have to rush when you're alone with me  
  
[Chorus: The Weeknd & Daft Punk]  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
  
[Pre-Chorus: The Weeknd]  
Hey! You've been scared of love and what it did to you  
You don't have to run, I know what you've been through  
Just a simple touch and it can set you free  
We don't have to rush when you're alone with me  
  
[Chorus: The Weeknd & Daft Punk]  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I know what you feel right now  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I know what you say right now, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I know what you say right now, babe  
Na na, na, na, na, na, na na na  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
I feel it coming, I feel it coming, babe  
  
[Outro: Daft Punk]  
I feel it coming, babe  
I feel it coming, babe  
I feel it coming, babe  
I feel it coming, babe",
        primary_tag: "R&B"
    },
    {
        title: "Call Me Back",
        artist: "The Strokes",
        lyrics: "
Wait time is the worst  
I can hardly sit  
No one has the time  
Someone's always late  
  
I look for you  
And you look for me  
  
I don't know why  
I came down  
I hold your phone  
Don't wake up  
I hear a voice  
In the ground  
  
Tell me, don't tell me  
The hard part is telling you  
Something that you would not like me to tell you  
Tell me, don't tell me  
The hard part is telling you  
Something that you would not like me to tell you  
  
Wait time is to blame  
Mapped out fame's a trip  
We all have the time  
Someone's always fed  
  
I look for you  
And you look away  
  
I don't know why  
I came down  
I hold your phone  
Don't wake up  
I hear a voice  
In the ground  
  
(Waking up is so much fun to do)  
Tell me, don't tell me  
The hard part is telling you  
Something that you would not like me to tell you  
(An 80's movie make-out party with you)  
Tell me, don't tell me  
The hard part is telling you  
Something that you would not like me to tell you",
    primary_tag: "Rock"
    }
])

User.create(username: "drewwebs", email: "drewwebs@gmail.com", password: "hunter12")