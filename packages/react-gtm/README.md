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



## TODO Page view trigger on variable change

## TODO Trigger type timer interval

## TODO Trigger Pause

## TODO Folder
## Tag Sequencing

- Tag Advanced Settings
- Tag Sequencing -> Fire tag after ... -> Select a Tag


## Single Page Application

- Triggers [(See History Change Trigger)](https://tagmanager.google.com/#/container/accounts/6006715401/containers/66043945/workspaces/7/triggers)

## Attribution

- https://www.svgrepo.com/svg/85761/image
- https://newsapi.org/

## Sending Custom Events to Google Analytics

- In code

```
 window.dataLayer?.push({
      event: "teaser-clicked",
      teaserTitle: title,
      teaserAuthor: author,
    });
```

- in GTM:
  - Create: a Google Analytics: GA4 Configuration Tag. Name it "GA Config". only set the Measuring ID from GA.
  - Trigger: Create "teaser-click-trigger"
    - Type: Custom Event -> Event name: "teaser-clicked" (same as in code)
  - Tag: Create "Teaser Click"
    - Type: GA4 Event
    - Configuration Tag: "GA Config"
    - Triggering: "teaser-click-trigger"
  - Variables:
    - new User Defined Variable called: "dlv-teaser-author"
      - Type: Data Layer Variable
      - Data Layer Variable Name: teaserAuthor (same as in code)
    - new User Defined Variable called: "dlv-teaser-title"
      - Type: Data Layer Variable
      - Data Layer Variable Name: "teaserTitle" (same as in code)

  Pro Tip: you can add all Event names such as "teaser-clicked", too your "GA Config" tag as a Field tuple. Field Name will be the  Event name (e.g "teaser-clicked") and Value will be a Variable 
## Custom events

- Triggers -> New -> Custom Event
- Event Name: "TestingCustomEvents"
- Add script to source code:

```
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "TestingCustomEvents",
});
```

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
