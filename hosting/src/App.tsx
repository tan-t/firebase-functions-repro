import React, { useState, useEffect } from "react";
import firebase from "firebase";

function App() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        if (user.user) {
          user.user.getIdToken().then(setToken);
        } else {
          throw new Error("sign in please!");
        }
      });
  }, []);
  const callFirebaseFunction = async () => {
    try {
      const res = await firebase.functions().httpsCallable("hellworld")();
      alert(JSON.stringify(res));
    } catch (e) {
      alert("error!");
      console.error(e);
    }
  };
  return (
    <>
      <div className="App">
        {token && (
          <button onClick={callFirebaseFunction}>
            call function with: {token}
          </button>
        )}
      </div>
    </>
  );
}

export default App;
