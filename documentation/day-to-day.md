
PS D:\LEARN-PROJECTS\VERCEL-TYPESCRIPT-BACKEND-HOSTING> npm init -y
Wrote to D:\LEARN-PROJECTS\VERCEL-TYPESCRIPT-BACKEND-HOSTING\package.json:

{
  "name": "vercel-typescript-backend-hosting",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



PS D:\LEARN-PROJECTS\VERCEL-TYPESCRIPT-BACKEND-HOSTING> npm i -D typescript tsx @types/node @types/dotenv

added 9 packages, and audited 10 packages in 21s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\LEARN-PROJECTS\VERCEL-TYPESCRIPT-BACKEND-HOSTING> npx tsc --init  

Created a new tsconfig.json                                                                                             
                                                                                                                     TS 
You can learn more at https://aka.ms/tsconfig


vercel.json

{
    "builds":[
        {
            "src":"dist/server.js",
            "use":"@vercel/node"
        }
    ],
    "routes":[
        {
            "src":"/(.*)",
            "dest":"dist/server.js"
        }
    ]
}

npm i -g vercel@latest

after this line do    "vercel --prod"



PS D:\LEARN-PROJECTS\VERCEL-TYPESCRIPT-BACKEND-HOSTING> vercel --prod
Vercel CLI 49.1.2
? Set up and deploy “D:\LEARN-PROJECTS\VERCEL-TYPESCRIPT-BACKEND-HOSTING”? yes
? Which scope should contain your project? Muneesh's projects
? Link to existing project? no
? What’s your project’s name? vercel-typescript-backend-hosting
? In which directory is your code located? ./
? Do you want to change additional project settings? no
🔗  Linked to muneeshs-projects-0c5e57cb/vercel-typescript-backend-hosting (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/muneeshs-projects-0c5e57cb/vercel-typescript-backend-hosting/D5rADYM692kW4jiCDjBKTnfvLYkb [3s]
✅  Production: https://vercel-typescript-backend-hosting-axstvsoi8.vercel.app [15s]
❗️  Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings












to remove caching or untrack file that already pushed to repo by forgetting to add on the .gitignore , then 


git rm --cached .env

PS D:\PERSONAL PROJECTS\MOVIE-TICKET-BACKEND> git rm --cached .env
rm '.env'
PS D:\PERSONAL PROJECTS\MOVIE-TICKET-BACKEND> git rm --cached .env.development
>> git rm --cached .env.production
rm '.env.development'
rm '.env.production'