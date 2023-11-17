## The Guide

## RUNNING E2E TESTS

```
Add #E2E CYPRESS- ENV vars
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_VERCEL_URL=http://localhost:3000
NEXT_PUBLIC_COMMUNITY_API_URL=http://localhost:5002/v1/community
#NEXT_PUBLIC_COMMUNITY_API_URL=https://ningi-community-server.vercel.app/v1/community
MANAGE_APPLICATION_TOKEN=vbdre_E2E_uigikb98687_E2E_0945fv

cd cypress
npm run cy:browser
```
