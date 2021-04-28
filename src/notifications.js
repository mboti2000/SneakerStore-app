import { store } from 'react-notifications-component';

export const signOutNotification = () => { store.addNotification({
    title: "Sign Out",
    message: "Signed out from your account",
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true
    }
}) };

export const signInNotification = () => { store.addNotification({
    title: "Sign In",
    message: "Successfully logged in to your account",
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true
    }
})};

export const registerNotification = () => {store.addNotification({
    title: "Resgistration",
    message: "Your account was successfully created!",
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true
    }
})};