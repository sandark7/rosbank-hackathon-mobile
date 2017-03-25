import PushNotification from 'react-native-push-notification'
import Secrets from 'react-native-config'

// https://github.com/zo0r/react-native-push-notification
PushNotification.configure({

  // (optional) Called when Token is generated (iOS and Android)
  onRegister: (token) => {
    console.log('TOKEN:', token)
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: (notification) => {
    console.log('NOTIFICATION:', notification)
  },

  // ANDROID ONLY: (optional) GCM Sender ID.
  senderID: Secrets.GOOGLE_PUSH_SENDER_ID,

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  // Leave this off unless you have good reason.
  popInitialNotification: false,

  /**
    * IOS ONLY: (optional) default: true
    * - Specified if permissions will requested or not,
    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    * This example app shows how to best call requestPermissions() later.
    */
  requestPermissions: false
})

PushNotification.localNotificationSchedule({
  message: 'My Notification Message', // (required)
  date: new Date(Date.now() + (2 * 1000)) // in 60 secs
})
