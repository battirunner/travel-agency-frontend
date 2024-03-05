export const initFacebookSdk = () => {
  return new Promise((resolve, reject) => {
    // Load the Facebook SDK asynchronously
    // window.fbAsyncInit = () => {
    window.FB.init({
      appId: import.meta.env.VITE_REACT_APP_FACEBOOK_CLIENT_ID,
      cookie: true,
      xfbml: true,
      version: "v19.0",
    });
    // Resolve the promise when the SDK is loaded
    resolve();
    // };
  });
};

export const getFacebookLoginStatus = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (response) => {
        resolve(response);
      },
      { scope: "public_profile,email" }
    );
  });
};
