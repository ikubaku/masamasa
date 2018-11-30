all:
	npx webpack
	cp index.html dist/

test:
	npx jest
