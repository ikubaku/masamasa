all:
	npx webpack
	cp index.html dist/

test:
	npx tslint 'src/**/*.{ts,tsx}'
	npx jest
