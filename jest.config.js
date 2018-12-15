module.exports = {
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    testRegex: "/src/__tests__/.*\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    testEnvironment: 'node',
};
