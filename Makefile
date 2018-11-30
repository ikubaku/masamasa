all:
	npx webpack
	cp index.html dist/

test:
	npx tslinter 'src/**/*.{ts,tsx}'
	npx jest
