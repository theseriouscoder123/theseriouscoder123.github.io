importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
   const firebaseConfig = {
    apiKey: "AIzaSyBmzjR61-1FVFTwUHfHTQbG20dANtOtPqk",
    authDomain: "festination-4ad92.firebaseapp.com",
    projectId: "festination-4ad92",
    storageBucket: "festination-4ad92.appspot.com",
    messagingSenderId: "82515539960",
    appId: "1:82515539960:web:f3c7e24d1274080aa1080d",
    measurementId: "G-BMPYT66DRX"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });