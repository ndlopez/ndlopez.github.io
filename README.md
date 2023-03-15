# My web portfolio

[Live Demo](https://ndlopez.github.io)

As a way to show some of the [projects](https://ndlopez.github.io/pages/projects.html) I've been working on and worked on, these small site acts as my digital [resume](https://ndlopez.github.io/pages/resume.html).

On a single page I also summarize some of the research I worked on and current [research](https://ndlopez.github.io/pages/research.html) interests.

## Available tools

- Weather data (updated daily)

- Password Generator (namely LazyPass)

- To do/doing list

- Current month calendar

## Used libraries and assets

- Some of the SVGs are from [here](https://github.com/danklammer/bytesize-icons)

- Weather data are plot using D3JS library.

## Running Environment

Browser: Firefox, obviously.

Editor: VIM and Codium

Debian Buster, Sony Vaio J21

--

## Wrangling CSV data in VIM

To replace " " with commas:

	:1,$s/ /,/g

Replace comma with "cr" char for the last line:
	
	:$s/,//g

Search and DEL words that start with capital A,B,C,...Z:

	:g/[A~Z]/d

<!--p>September post: Lately (I mean for the last 3 months), I've been reading "Zealot" by Reza Aslan, a book that explores about the life of 
        Jesus of Nazareth. Being raised in a Roman catholic family, I knew little or close to nothing about his life. At school I probably was not that interested and so I focused more on Math and Physics.<br>
        Can't wait to finish and start another book, I already picked one Daniel Keyes'- Flowers for Algernon - a book 
        I heard while watching an episode of NewsRadio in YouTube. 
      </p>
      <p>Back at GradSchool I used to listen to news from home, but lately they've changed a lot the format, and the fact the current ruling party is not of my please, makes it listen to news a lil harder.
        Thus, lately, I've been listening a lot ThirdRock radio, the place where I discover new music. 
        If you are into Alternative Rock please give it a try. 
      </p>
      <p>Overall, I am preparing for job interviews and learning about Machine Learning methods.</p>
      <p>November: Lately, or should I say, in recent years, most of my acquired items (bicycle, laptop, rain-gear, etc) are getting old or their time of replacement have come to. It started with my MacBook Pro, bought in 2010 and worked fine for about 2 years and then the HDD failed, I took it to a "Genius Bar", and they replaced the damaged device and made a cleanup of keyboard and display. It costed me about 7000JPY.</p>
      <p>Next, my rain/wind-breaker Mammut jacket got some internal scratches that I was able to repair by sewing.</p>
      <p>Lastly, my bicycle which I acquired in 2016 just after learning how to ride it. I went to so many places in it, the University (~40mins), Japanese school(~35mins) and ran many chores. However, last October the back tire got a puncture and after taking it to a repair, 
        they told me it needed an entire replacement of the tire and it would cost almost half of what I originally paid for the whole bicycle. Therefore, I decided to buy another.<br/><br/>In other news, I've been making a Note App for Android, since Simplenote decided to kick me out if I continue using a WordPress account to login, even though its their parent company or a product of the parent company. </p-->
