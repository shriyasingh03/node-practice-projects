# making inverted index table

Let's do a **line-by-line, variable-by-variable trace** of exactly what happens to `invertedIndex` at every step.

---

### 🧠 The Goal of This Loop

Your `fileType` is a **Forward Index** (Category → List of Extensions).
This loop transforms it into an **Inverted Index** (Extension → Category).

---

### 🔍 Step-by-Step Iteration Trace

Here is exactly what the computer does, one line at a time.

#### **Initial State (Before the loop)**

```jsx
const invertedIndex = {}; // Empty object.
```

---

#### **Outer Loop Iteration 1: `category = "images"`**

- `category` = `"images"`
- `extensionsArray` = `["png", "jpg", "jpeg", "gif", "bmp", "tiff", "svg", "ico", "webp", "heic"]`
- **Inner Loop starts** (i = 0 to 9):

| Inner i | `extension` variable | What the code does | State of `invertedIndex` after this line |
| --- | --- | --- | --- |
| **i=0** | `"png"` | `invertedIndex["png"] = "images"` | `{ png: 'images' }` |
| **i=1** | `"jpg"` | `invertedIndex["jpg"] = "images"` | `{ png: 'images', jpg: 'images' }` |
| **i=2** | `"jpeg"` | `invertedIndex["jpeg"] = "images"` | `{ png: 'images', jpg: 'images', jpeg: 'images' }` |
| **i=3** | `"gif"` | `invertedIndex["gif"] = "images"` | `{ png: 'images', jpg: 'images', jpeg: 'images', gif: 'images' }` |
| **i=4** | `"bmp"` | `invertedIndex["bmp"] = "images"` | `{ ..., bmp: 'images' }` |
| **i=5** | `"tiff"` | `invertedIndex["tiff"] = "images"` | `{ ..., tiff: 'images' }` |
| **i=6** | `"svg"` | `invertedIndex["svg"] = "images"` | `{ ..., svg: 'images' }` |
| **i=7** | `"ico"` | `invertedIndex["ico"] = "images"` | `{ ..., ico: 'images' }` |
| **i=8** | `"webp"` | `invertedIndex["webp"] = "images"` | `{ ..., webp: 'images' }` |
| **i=9** | `"heic"` | `invertedIndex["heic"] = "images"` | `{ ..., heic: 'images' }` |

**End of Outer Loop 1:** `invertedIndex` now has 10 keys, all pointing to `'images'`.

---

#### **Outer Loop Iteration 2: `category = "media"`**

- `category` = `"media"`
- `extensionsArray` = `["mp4", "mov", "avi", "mkv", "wmv", "flv", "mpg", "mpeg", "webm", "3gp"]`
- **Inner Loop starts:**

| Inner i | `extension` | What the code does | State of `invertedIndex` (new additions) |
| --- | --- | --- | --- |
| **i=0** | `"mp4"` | `invertedIndex["mp4"] = "media"` | `{ ..., mp4: 'media' }` |
| **i=1** | `"mov"` | `invertedIndex["mov"] = "media"` | `{ ..., mov: 'media' }` |
| **i=2** | `"avi"` | `invertedIndex["avi"] = "media"` | `{ ..., avi: 'media' }` |
| **i=3** | `"mkv"` | `invertedIndex["mkv"] = "media"` | `{ ..., mkv: 'media' }` |
| **i=4** | `"wmv"` | `invertedIndex["wmv"] = "media"` | `{ ..., wmv: 'media' }` |
| **i=5** | `"flv"` | `invertedIndex["flv"] = "media"` | `{ ..., flv: 'media' }` |
| **i=6** | `"mpg"` | `invertedIndex["mpg"] = "media"` | `{ ..., mpg: 'media' }` |
| **i=7** | `"mpeg"` | `invertedIndex["mpeg"] = "media"` | `{ ..., mpeg: 'media' }` |
| **i=8** | `"webm"` | `invertedIndex["webm"] = "media"` | `{ ..., webm: 'media' }` |
| **i=9** | `"3gp"` | `invertedIndex["3gp"] = "media"` | `{ ..., 3gp: 'media' }` |

---

#### **Outer Loop Iteration 3: `category = "documents"`**

*(I won't write all 20+ iterations, but here is the pattern)*:

| Extension | Maps to |
| --- | --- |
| `"pdf"` | `"documents"` |
| `"docx"` | `"documents"` |
| `"xlsx"` | `"documents"` |
| `"pptx"` | `"documents"` |
| `"txt"` | `"documents"` |
| `"csv"` | `"documents"` |
| ...and so on for all 21 items... | `"documents"` |

---

#### **Outer Loop Iteration 4: `category = "apk"`**

| Extension | Maps to |
| --- | --- |
| `"apk"` | `"apk"` |
| `"aab"` | `"apk"` |
| `"xapk"` | `"apk"` |
| `"ipa"` | `"apk"` |
| `"app"` | `"apk"` |
| `"exe"` | `"apk"` |
| `"msi"` | `"apk"` |
| `"dmg"` | `"apk"` |
| `"deb"` | `"apk"` |
| `"rpm"` | `"apk"` |

---

#### **Outer Loop Iteration 5: `category = "compressed"`**

| Extension | Maps to |
| --- | --- |
| `"zip"` | `"compressed"` |
| `"rar"` | `"compressed"` |
| `"7z"` | `"compressed"` |
| `"tar"` | `"compressed"` |
| `"gz"` | `"compressed"` |
| `"bz2"` | `"compressed"` |
| `"xz"` | `"compressed"` |
| `"z"` | `"compressed"` |
| `"iso"` | `"compressed"` |

---

#### **Outer Loop Iteration 6: `category = "scripts"`**

| Extension | Maps to |
| --- | --- |
| `"js"` | `"scripts"` |

---

#### **Outer Loop Iteration 7: `category = "music"`**

| Extension | Maps to |
| --- | --- |
| `"mp3"` | `"music"` |
| `"wav"` | `"music"` |
| `"flac"` | `"music"` |
| `"aac"` | `"music"` |
| `"ogg"` | `"music"` |
| `"wma"` | `"music"` |
| `"m4a"` | `"music"` |
| `"alac"` | `"music"` |
| `"aiff"` | `"music"` |
| `"mid"` | `"music"` |

---

### 📦 The Final Result (The Complete Inverted Index)

After all 7 outer loops finish, `invertedIndex` ends up looking like this (I have grouped it by category for readability, but in memory, it's just one flat object):

```jsx
console.log(invertedIndex);

// Output:
{
  // ----- IMAGES (10 items) -----
  png: 'images',
  jpg: 'images',
  jpeg: 'images',
  gif: 'images',
  bmp: 'images',
  tiff: 'images',
  svg: 'images',
  ico: 'images',
  webp: 'images',
  heic: 'images',

  // ----- MEDIA (10 items) -----
  mp4: 'media',
  mov: 'media',
  avi: 'media',
  mkv: 'media',
  wmv: 'media',
  flv: 'media',
  mpg: 'media',
  mpeg: 'media',
  webm: 'media',
  '3gp': 'media',

  // ----- DOCUMENTS (21 items) -----
  pdf: 'documents',
  docx: 'documents',
  xlsx: 'documents',
  pptx: 'documents',
  txt: 'documents',
  csv: 'documents',
  rtf: 'documents',
  odt: 'documents',
  ods: 'documents',
  odp: 'documents',
  doc: 'documents',
  xls: 'documents',
  ppt: 'documents',
  html: 'documents',
  xml: 'documents',
  json: 'documents',
  epub: 'documents',
  md: 'documents',
  pages: 'documents',
  numbers: 'documents',
  key: 'documents',

  // ----- APK (10 items) -----
  apk: 'apk',
  aab: 'apk',
  xapk: 'apk',
  ipa: 'apk',
  app: 'apk',
  exe: 'apk',
  msi: 'apk',
  dmg: 'apk',
  deb: 'apk',
  rpm: 'apk',

  // ----- COMPRESSED (9 items) -----
  zip: 'compressed',
  rar: 'compressed',
  '7z': 'compressed',
  tar: 'compressed',
  gz: 'compressed',
  bz2: 'compressed',
  xz: 'compressed',
  z: 'compressed',
  iso: 'compressed',

  // ----- SCRIPTS (1 item) -----
  js: 'scripts',

  // ----- MUSIC (10 items) -----
  mp3: 'music',
  wav: 'music',
  flac: 'music',
  aac: 'music',
  ogg: 'music',
  wma: 'music',
  m4a: 'music',
  alac: 'music',
  aiff: 'music',
  mid: 'music'
}
```

---

### 🧠 The "Neets & Greets" (The Hidden Nuances)

1. **No Overwrites (The "Safe" Neet)**:
Notice that **no extension appears in more than one category**. `jpg` only exists under `images`. `pdf` only exists under `documents`.
Therefore, when the loop writes `invertedIndex[extension] = category`, it is **setting it for the first and only time**. No value is ever overwritten.
*If* an extension appeared twice (e.g., `"doc"` in both `documents` and `scripts`), the *last* category processed would win. Here, it's perfectly safe.
2. **Case Sensitivity (The "Gotcha" Greet)**:
The extensions in `fileType` are **lowercase** (`"jpg"`, `"png"`).
If the user has a file named `IMAGE.JPG`, and you call `f("JPG")` without converting to lowercase, it will look for `invertedIndex["JPG"]` and return `undefined` (causing it to go to `"other"`).
This is exactly why the `f(ext)` function **must** do `.toLowerCase()` before looking up.
3. **Iteration Order (The "Feature" Neet)**:
`for (let category in fileType)` iterates in the **insertion order** (in modern JavaScript engines). So the loop processes `images` first, `media` second, `documents` third, etc. If there were duplicate extensions, the *last* category processed would be the one that stays.
4. **Memory Efficiency**:
This entire object is built **once** at the start of your script. It lives in memory for the entire execution. However, it only stores about **70 key-value pairs**. That is tiny (less than 5KB). For a CLI tool, this is incredibly lightweight and efficient.

---