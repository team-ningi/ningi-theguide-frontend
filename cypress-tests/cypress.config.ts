/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { defineConfig } = require('cypress');

export default defineConfig({
    e2e: {
        specPattern: path.resolve('.', 'cypress', 'e2e', '**', '*cy.ts'),
        baseUrl: 'http://localhost:3000'
    },
    env: {
        // E2E_GUIDE_API_URL: 'ningi-ai-advisor-server.vercel.app/v1/'
        E2E_GUIDE_API_URL: 'http://localhost:5002/v1/'
    }
});
