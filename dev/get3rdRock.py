#!/usr/bin/python3
# NowPlaying on ThirdRock
# 0.2version
# author: Diego Lopez
# 
# Fetch current song playing on thirdRock from tune.in
# dependencies: python3,json,urllib
#
from urllib.request import urlopen
from urllib.error import URLError
import json
from datetime import datetime
import time # to loop

that_url = "https://feed.tunein.com/profiles/s151799/nowPlaying"

jsonFile = "get3rdRock.json"

def get_info():
    try:
        currData = json.load(urlopen(that_url,context=None))
    except URLError:
        return False

    return currData #[param]

def write_json(new_data, filename=jsonFile):
	with open(filename,"r+") as inFile:
		file_data = json.load(inFile)
		file_data['playlist'].append(new_data)
		inFile.seek(0)
		json.dump(file_data, inFile,indent=4)
		#outFile.write(json.dumps(outJson))

while(True):
	thisDate = datetime.now()
	heure = thisDate.strftime("%H:%M")
	jsonHead = get_info()
	currSong = jsonHead['Header']['Subtitle']
	artwork = jsonHead['Secondary']['Image']

	outJson = {"time":heure,"song":currSong,"artwork":artwork}

	write_json(outJson)
	time.sleep(185)


