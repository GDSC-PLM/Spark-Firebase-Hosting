# Back to Basics: Spark Your Deployments with Firebase Workshop

Back to Basics is a three-day study jam series for students interested in developer technologies. It aims to have an intensive learning discussion, along with in-house speakers from GDSC PLM’s technology department to discuss the basics of the product development including UI/UX Fundamentals, Intro to Web Development, and Hosting websites in Firebase.

Spark Your Deployments with Firebase is the 3rd and last installment in the Back to Basics workshop series. This workshop aims to pick up where Weave left off by trying an alternative hosting method via firebase, and implementing cloud firestore.

[Workshop Slides](https://docs.google.com/presentation/d/1jtTz2B7Xh9AldVu4VmQIgN6VCtdmqMo8VPcEvuuLamY/edit?usp=sharing)

# FAQs
**Q**: I'm getting a CORS error on register.js, the code in the script doesn't work because of it.

**A**: Try using the Live Server vscode extension, and run the project through it instead of manually opening the .html file. HTML files opened through file explorer does not support javascript modules, which register.js is

---

**Q**: I'm getting access denied errors or permissions errors whenever I try to read data or add data to my firestore.

**A**: Try checking your firestore rules if it allows read and write. Here's what my rules look like. (NOTE: I enabled read and write access to my db only up to Jan 13, 2023. After that I will deny read and writes)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2023, 1, 13);
    }
  }
}
```

---

**Q**: Whenever I run `firebase deploy`, it says that there were only 2 files uploaded and when I check the URL, my site isn't there, only an initial setup page.

**A**: Check your project directory if there are duplicated folder nesting like this or similar
```
Spark-Firebase-Hosting
|-src
|-README.md
|-Spark-Firebase-Hosting
|  |-src
|  |-README.md
```
Try to eliminate this kind of nesting, you can manually copy paste the real project folder to another location, and then re-run `firebase init`

---

**Q**: How can I make my PowerShell the same as yours during the workshop?

**A**: It's a secret jk. I use the [Oh-My-Posh](https://ohmyposh.dev/docs/) extension for PowerShell and then [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-ph&gl=ph) for the terminal window.

---

Any further questions that weren't disscussed in the FAQs? Feel free to contact me anywhere!

[LinkedIn: James Laurence Cruz](https://www.linkedin.com/in/cruz-james/)

[Messenger: James Laurence Cruz](m.me/killua080)