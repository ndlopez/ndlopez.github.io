# My web portfolio

[Live Demo](https://ndlopez.github.io)

Display on Web weather conditions by scraping data from tenki.jp and famous quotes scrapped from goodreads.com

Some links are still broken, sorry about that. 

Some of the SVGs are from [here](https://github.com/danklammer/bytesize-icons)

To plot weather data I used the D3JS library.

Data is not updated daily, either I set up an AWS or Azure account so the Shell Script could get data and CRON update it.

## Wrangling CSV data in VIM

To replace " " with commas:

	:1,$s/ /,/g

Replace comma with "cr" char for the last line:
	
	:$s/,//g

Search and DEL words that start with capital A,B,C,...Z:

	:g/[A~Z]/d

## Running Environment

Browser: Firefox, obviously.

Editor: VIM and VSCode

Debian Buster, Sony Vaio J21
