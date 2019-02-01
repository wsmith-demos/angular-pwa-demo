SwPush generic notes. I do not cover backend implementation here.

See https://blog.angular-university.io/angular-push-notifications/ for a good example

## Generate your own keys:
```
npm install -g web-push
web-push generate-vapid-keys --json
```

## Subscribe to Push Notifications:
Simple push notifications subscribe code is in `app.component.ts`

Below is a simple example for push messages. Copy into the "Push" textbox in the Application -> Service Workers dev tools tab in Chrome to test it out:
```
{
  "notification": {
            "title": "Pug Message",
            "body": "Demo complete!",
            "icon": "assets/icons/icon-72x72.png"
  }
}
```
