# 🦊 File Organizer Projects

> *"I used to think my code was messy... then I opened my Downloads folder."*

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)


---

<table align="center">
  <tr >
    <td><img src="/coding mems/downloadFolderMem.png" alt="Meme 1" width="300" style="border-radius: 15px;" /></td>
    <td><img src="/coding mems/Aaa.png" alt="Meme 2" width="300" 
       height="290" style="border-radius: 15px;" /></td>
  </tr>

</table>
credit : "https://www.facebook.com/groups/it.humor.and.memes/posts/3837665376259218/"


# 🗂️ File Organizer CLI

> *"Let's fix the clutter of file downloads!"* — Every Developer ever

## 🧠 The Problem: Digital Chaos

We all have that one folder. The **Downloads** folder.
- `image (1).png`
- `report_final_v2_FINAL.pdf`
- `Screenshot 2024-01-01.png`
- `New Folder (3)` containing 5 more random files.

It is the digital equivalent of throwing everything into a single drawer and hoping for the best. 

**The project**
 It scans, identifies, and teleports every file into perfectly labeled categories (`Images/`, `Documents/`, `Media/`). 

Let's turn that **cluttered drawer** into a **well-stocked library**.

## ⚡ Features (The Power of Node.js)

- **Shallow Cleaning**: Cleans only the root folder (ignores subfolders).
- **Deep Cleaning (Recursive)**: Crawls into *every* subfolder, extracting all files and flattening them into organized folders.
- **Duplication Protection**: Never overwrites a file. If `photo.jpg` exists, it creates `photo_1.jpg`, `photo_2.jpg`, etc.
- **Move vs Copy (The "Master" Move)**: Uses `fs.renameSync` (move) instead of `fs.copy`. It changes the file's address on the disk in <1ms instead of duplicating bytes. Your SSD will thank you.
- **Visual Tree**: Prints a beautiful file hierarchy so you can see the mess *before* you clean it.
- **Security Hardened**: Blocks path traversal attacks (e.g., `../../etc/passwd`) and null-byte injections.

---


# 🚀 Installation & Setup
## 1. Local Run (For Practice)
```bash
cd node-projects/File-Organizer
node organizer.js organizePath only ./test-folder
```
## 2. Global Install 
Turn this into a system-wide command:

```bash
cd node-projects/File-Organizer
npm link
```
Now, from ANYWHERE in your terminal:
```bash
organize organizeMe only
organize organizePath deep ~/Downloads
organize tree me
```

# 🎮 Usage Commands
| Command | Action |
| :--- | :--- |
| `organize organizeMe only` | Cleans the **current** folder (shallow). |
| `organize organizeMe deep` | Cleans the **current** folder + all subfolders (deep). |
| `organize organizePath only "C:/My Folder"` | Cleans a **specific** folder (shallow). |
| `organize organizePath deep "C:/My Folder"` | Cleans a **specific** folder + all subfolders (deep). |
| `organize tree me` | Shows a visual folder tree of the **current** folder. |
| `organize tree path "C:/My Folder"` | Shows a visual folder tree of a **specific** folder. |