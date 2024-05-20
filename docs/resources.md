# Resources

On this page you will find some helpful resources, including how to connect to UFV server and what software is recommended. 

## CIS Server

In order to publish our websites to the internet, we will need to connect and interact with a web server. The server that we will be using in this course is [http://cisweb.ufv.ca](http://cisweb.ufv.ca). This is a UFV-hosted server that is maintained by the School of Computing. 

Follow the instructions below to connect to this server.

### Video instructions:

<iframe width="560" height="315" src="https://www.youtube.com/embed/iDRhtLTXY9k?si=-Jli-HRuG56EtHgL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Text instructions:

1. In order to connect to the server, you need to install an FTP (File Trasfer Protocal) software. 
   1. If you don't have this install, [follow the instructions below](#ftp-clients).
2. Open an FTP client such as WinSCP or FileZilla 
3. Navigate to the connection manager and add a new site
4. Use the information below to establish a connection to the server

```
host: cisweb.ufv.ca
port: 22
protocol: sftp
username: (your student id - example: 30012345) - note: this should NOT be your name/email. Just numbers.
password: (your UFV password - same as your Blackboard/UFV student email)
```

Once you have established a connection, you will see a list of files populated on the right handside of your screen. The left side of the application shows files on your computer while the right side is your dedicted CIS Web server folder.

Your CIS web server home directory (folder) is `/home/cis145/studentID` for example: `/home/cis145/30012345`. Any files placed in this directory (folder) are accessible to the world using a web browser at `http://cisweb.ufv.ca/~studentID`.

In order to test your server connection, upload a file from your computer to the sever using the FTP client. Then, go to `http://cisweb.ufv.ca/~studentID` where studentID is your own number. For example: `http://cisweb.ufv.ca/~300123456`.

If you change from `/home/cis145/(studentid)` to its parent directory (..) your sftp client will not be able to read or write from the current directory. This is **intentional**, as you are not permitted to list all other home directories on the system. The simplest solution is to just change back to your home directory by changing to `(/home/cis145/(studentid))` or, depending on your sftp client, by clicking on home icon.

### FAQ

- Q: I don't have an FTP client installed. What do I do?
  - A: Follow the [instructions below](#ftp-clients)

- Q: I can't connect to the server. What do I do?
  - A: Double check your connection information. Common mistakes include incorrect username/password. Your username is your student ID number and should only include numbers.

- Q: I tried to login multiple times and I keep getting an error. What do I do?
  - A: If you have multiple login errors, the server will ban your address for an interval ranging from a few minutes to a few hours, so if you have a password login error, carefully re-enter your correct username and password before retrying. 


## Softwares

In order to develop our websites, we will be using a code editor to write and oragnize code. You're welcome to use any code editor you'd like, below are some options for your consideration:

### Code Editor

- VSCode [**recommended**]
    - Download it from [here](https://code.visualstudio.com/download).
    - Make sure to download the correct version for your operating system.
    - The stable build is recommended for most users

- WebStorm [Download](https://www.jetbrains.com/webstorm/download)
    - Part of intelij, a very powerful IDE

- Atom [Download](https://atom.io/)
    - Created by github, relatively new and very impressive editor.
    - Recommended plugin: emmet

- Notepad++ [Download](https://notepad-plus-plus.org)
    - Well established, syntax highlighting editor

- Sublime [Download](https://www.sublimetext.com/3)
    - A very advanced and capable editor

### FTP Clients

- FileZila (Windows, Mac, Linux) [**recommended**]
    - Download it from [here](https://filezilla-project.org/download.php?type=client).
    - Make sure to download the correct version for your operating system.
    - Install the **client version**

- WinSCP (Windows)
    - Download it from [here](https://winscp.net/eng/download.php).
    - This is an SFTP client for Windows. It is simple, clean, and effective.



