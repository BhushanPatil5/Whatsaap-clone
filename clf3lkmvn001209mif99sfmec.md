---
title: "Enhancing Web App User Experience: Making Modals Behave Like Mobile Apps ( ReactJs )"
seoTitle: "Enhancing Web App User Experience: Making the Back Button Behave Like"
seoDescription: "Learn how to improve your web app user experience by making the back button behave like a mobile app. Discover two approaches to achieving this, along with"
datePublished: Sat Mar 11 2023 06:40:14 GMT+0000 (Coordinated Universal Time)
cuid: clf3lkmvn001209mif99sfmec
slug: enhancing-web-app-user-experience-making-modals-behave-like-mobile-apps-reactjs
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1678268986970/463bc942-8ee1-46d6-bb98-7d70f7ef03e9.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1678269169126/d7ab6281-ce07-44bc-bd65-e52531dbf103.png
tags: user-experience, web-development, reactjs, modal, 2articles1week

---

As web applications continue to evolve, the lines between web and mobile apps are becoming increasingly blurred. One area where this is particularly noticeable is in the way that users expect the back button to behave. In a mobile app, when a user presses the back button, they expect any pop-up or modal windows to close, rather than being taken back to the previous page. However, this behavior is not always consistent in web apps.

To create a more seamless experience for users, web developers can implement certain techniques to make web apps behave more like mobile apps. In this article, we will explore two approaches to achieving this: creating helper functions and using a hash in the URL.

## Helper Functions

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678269035813/98dccbe0-488c-4abd-9459-cbb4c7150ec2.png align="center")

One way to make a web app behave more like a mobile app is to create helper functions that allow you to override the default behavior of the back button when a modal window is open. With this approach, you can ensure that when a user presses the back button, they are taken back to the previous state of the modal window, rather than being taken back to the previous page.

To achieve this, you can create two helper functions: one to neutralize the back button when a modal window is open, and another to revive it when the modal window is closed.

The neutralizeBack function should take a callback function as its argument. This callback function will be executed when the back button is pressed while the modal window is open. Here's an example implementation of the neutralizeBack function

```javascript
const neutralizeBack = (callback) => {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = () => {
    window.history.pushState(null, "", window.location.href);
    callback();
  };
};
```

The revivalBack function, on the other hand, should simply restore the default behavior of the back button. Here's an example implementation of the revivalBack function:

```javascript
const revivalBack = () => {
  window.onpopstate = undefined;
  window.history.back();
};
```

To use these functions, you can simply call neutralizeBack with your desired callback function when you open a modal window, and call revivalBack when you close the modal window. Here's an example implementation:

```javascript
handleOpenModal = () =>
  setState(
    { modalOpen: true },
    () => neutralizeBack(this.handleCloseModal)
  );

handleCloseModal = () =>
  setState(
    { modalOpen: false },
    revivalBack
 );
```

## Using a Hash in the URL

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678269083278/e699aa27-64ba-44d2-a230-2f7b6ac5a101.png align="center")

Another approach you can take is to use a hash in your URL to indicate the state of the modal window. A hash is a URL segment that starts with a hashtag (#). Navigating between different hashes in the URL does not trigger a page reload, but still adds an entry to the browser's history, allowing the back button to be used to close modal windows.

A hash is a URL segment that begins with a hashtag (#). Navigating between different hashes in the URL does not cause a page to reload, but still adds an entry to the browser's history, which allows the back button to close modal windows. This approach is relatively simple to implement and can provide a more intuitive user experience.

To implement this approach, you can create a custom hook that toggles the state of the modal window based on the URL hash. In the example implementation below, we create a custom hook called `useHashRouteToggle` that takes a `modalHash` parameter to define the hash used for the modal window:

```javascript
function useHashRouteToggle(modalHash) {
  const [isOpen, toggleOpen] = useState(false);

  const toggleActive = (open) => {
    if (open) {
      window.location.assign(modalHash);
    } else {
      window.location.replace('#');
    }
  }

  useEffect(() => { 
    const handleOnHashChange = () => {  
      const isHashMatch = window.location.hash === modalHash;   
      toggleOpen(isHashMatch);  
    };  

    window.addEventListener('hashchange', handleOnHashChange);  
    
    return () => window.removeEventListener('hashchange', handleOnHashChange);  
  }, [modalHash]);

  return [isActive, toggleActive];
} 
```

With this custom hook, you can simply call toggleActive with the desired state of the modal window (true to show the modal, false to hide it).

The `useHashRouteToggle` hook returns an array with two items: `isOpen`, which is a boolean value indicating whether the modal window is currently open, and `toggleActive`, which is a function that toggles the state of the modal window. When `toggleActive` is called with `true`, it updates the URL to include the `modalHash` parameter. When `toggleActive` is called with `false`, it replaces the hash in the URL with an empty string.

The `useEffect` hook sets up an event listener for the `hashchange` event, which is triggered whenever the hash in the URL changes. If the current hash matches the `modalHash` parameter, the hook updates the `isOpen` state to `true`. If the current hash does not match the `modalHash` parameter, the hook updates the `isOpen` state to `false`.

Using a hash in the URL can be an effective way to handle modal windows in a web app. By creating a custom hook to toggle the state of the modal window based on the URL hash, you can provide a more consistent and intuitive user experience.

Here we have discussed how the behavior of the back button is different in mobile apps and web apps, and how web app developers can make their apps behave more like mobile apps in this regard. Two approaches are discussed: creating helper functions to override the default behavior of the back button when a modal window is open, and using a hash in the URL by creating a custom hook in react to indicate the state of the modal window. Example implementations are provided for both approaches.

**Stay tuned don't forget to subscribe to my newsletter !!!**