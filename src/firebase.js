import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA74ZvfzfZVmopLVsbl88Y02CUaXNWGgwk",
  authDomain: "roblox-29707.firebaseapp.com",
  projectId: "roblox-29707",
  storageBucket: "roblox-29707.appspot.com",
  messagingSenderId: "1025034692104",
  appId: "1:1025034692104:web:628690bd4a9e9bf83293bd"
  }).auth()
