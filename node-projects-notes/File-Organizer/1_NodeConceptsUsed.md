# File organizer

---

### **🛠️ How the Masters Use These in the File Organizer**

Let's trace back to your project:

| **Object Used** | **Where in your code** | **Master's reason** |
| --- | --- | --- |
| **`process`** | `process.argv` to read CLI arguments. | Lets users type `node organizer.js ./Downloads deep`. |
| **`__dirname`** | (Not used, but recommended) If you had config files, `path.join(__dirname, 'config.json')` ensures you always find them. | Prevents errors when running the script from different folders. |
| **`fs`** | `fs.readdirSync`, `fs.renameSync`, `fs.mkdirSync`. | The entire engine of your app. |
| **`path`** | `path.resolve`, `path.join`, `path.extname`. | Makes your script work on Windows AND Mac without crashing. |
| **`os`** | *(Optional upgrade)* To check if the CPU has enough power or to clear temp folders. | `os.cpus().length` tells you how many threads you can use. |
| **`Buffer`** | *(Optional upgrade)* If you read the first 4 bytes of a file to check its "magic number" (instead of relying on extensions). | Detects file type securely (e.g., `%PDF` vs `FFD8`). |

---

### **📝 The "Cheatsheet" to Memorize**

1. **`process`** → For inputs and environment.
2. **`fs`** → For storing data permanently.
3. **`path`** → For finding files safely.
4. **`__dirname`** → For absolute paths.
5. **`Buffer`** → For handling binary data.