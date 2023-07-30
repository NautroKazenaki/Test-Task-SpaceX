module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
}