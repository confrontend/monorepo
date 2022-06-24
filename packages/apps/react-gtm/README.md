## Getting Started with Google Tag Manager

- [Create a Tag Manger Account](https://tagmanager.google.com/)
- Once an account is created, you can create a Container for your website:
  A Container is a collection of tags, triggers, variables, and related configurations installed on a given website or mobile app.
- [Install GTM Script into your website](https://developers.google.com/tag-platform/tag-manager/web)

## Tag Assistant

- [Use Tag Assistant for debugging GTM](https://tagassistant.google.com/)
- Add a domain (could be localhost)
- Click on created domain and interact with your website.

## Create your first Tag

- On container Dashboard, click on Tags -> Add new
- Tag Configuration: Custom HTML
- In Html field:

  ```
  <script>
    console.log('Hello World From GTM)
  </script>
  ```

- Triggering: All Pages (Page View)
- Click Submit to publish the changes.

## Install Google Analytics

- On container Dashboard, click on Tags -> Add new
- Tag Configuration: Google Analytics: GA4 Configuration
- Get Measurement ID (in older versions: Tracking ID) from Google Analytics. Go to Google Analytics -> Search For Measurement ID (should look like: G-xxxxxxxx)

## Definitions

- **Tag**: A tag is a code snippet that sends data to a system such as Google Analytics.
- **Trigger**: A trigger listens for certain events, such as clicks, form submissions, or page loads. When an event is detected that matches the trigger definition, any tags that reference that trigger will fire.
- **Variable**: A variable is a named placeholder for a value that will change, such as a product name, a price value, or a date.
- **Data layer**: Tag manager implements a data layer to temporarily hold values in the client so that they can be used by tags, triggers, and variables.

[reference](https://support.google.com/tagmanager/answer/6103657?hl=en#:~:text=Tag%3A%20A%20tag%20is%20code,reference%20that%20trigger%20will%20fire.)

## Creating Triggers

-

## Tag Sequencing

- Tag Advanced Settings
- Tag Sequencing -> Fire tag after ... -> Select a Tag

## Single Page Application

- Triggers [(See History Change Trigger)](https://tagmanager.google.com/#/container/accounts/6006715401/containers/66043945/workspaces/7/triggers)

## Attribution

- https://www.svgrepo.com/svg/85761/image
- https://newsapi.org/

## Sending Events to Google Analytics

- ToDO

## Passing custom events to Google Analytics

- Triggers -> New -> Custom Event
- Event Name: "TestingCustomEvents"
- Add script to source code:

```
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "TestingCustomEvents",
});
```

## GA Recommended events vs Custom events

[GA4 Recommended events](https://support.google.com/analytics/answer/9267735?hl=en)

 GA Recommended events are the same as custom events. Only their name and parameters are "prescribed" by Google. They won't be sent automatically as Automatic events (e.g page_view) do. 

- In code

```
 window.dataLayer.push({
   event: "MyLogin",
   method: // set dynamically
 });
```
- in GTM:
  - Create a Tag of type GA Config with no trigger and call it: "GA Config"
  -  Create a Tag of type GA Event. Call it "GA Login"
     - Configuration Tag: "GA Config"
     - Event Name: "login" (recommended by Google)
     - Add a trigger of type Custom Event
     - Event Name: "MyLogin" (same as event name in dataLayer)
- Now in GTM and GA, you can see that events like scroll are collected automatically. 

## Variables

Variables are pieces of information you want to Track. They are named placeholders for values that are populated when code is run on your website or mobile app. For example, the Tag Manager variable named "Page URL" returns the current web page URL.

- Built in

  1. Variables -> Configure -> Click Element

- Custom:

  - Simple example

    1.  Variables -> User-Defined Variables -> New -> Dom Element
    2.  TODO https://www.udemy.com/course/google-tag-manager-gtm/learn/lecture/19032378#overview

  - Cookies
    1.  Variables -> User-Defined Variables -> New -> 1st Party Cookie
    2.  Cookie Name: Set the name of Cookie

## Data Layer variables

- Variables -> User-Defined Variables -> New -> Data Layer Variable
- Data Layer Variable Name: "XYZ"
- Save and give a name: "XYZ Variable"
- Tags -> Add new -> Custom Html
- add script:

```
  <script>
    console.log({{XYZ Variable}})
  </script>
```

- in code base:

```
 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
   'XYZ': 123,
 });
```
