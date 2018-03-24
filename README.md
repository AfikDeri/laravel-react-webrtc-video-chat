## Video Chat Application Example

#### [@WeCodeTutorials](https://twitter.com/WeCodeTutorials)
[![Logo](https://thumb.ibb.co/iegMZn/Logo.png)](https://www.youtube.com/channel/UCj9VatwdukZjNOnIKcpWcsA)

#### WebRTC Project
[![Logo](https://webrtc.org/assets/images/webrtc-logo-horiz-retro-243x40.png)](https://webrtc.org/)

This project is made for my youtube tutorial on "Create a video Chat Application with Laravel & ReactJS (based on WebRTC)".

## get it up and running.

After you clone this project, do the following:

```bash
# go into the project
cd video-chat-example

# create a .env file
cp .env.example .env

# install composer dependencies
composer update

# install npm dependencies
npm install

# generate a key for your application
php artisan key:generate

# create a file for your SQLite database
touch database/database.sqlite

# mrun the migration files to generate the schema
php artisan migrate

# run webpack and watch for changes
npm run watch
```

Good Luck :)
