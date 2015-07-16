ELECTRONVERSION = $(shell electron --version| sed 's/v//')

build:
	electron-packager ./ electronChart --platform=darwin --arch=x64 --version=$(ELECTRONVERSION)
