
/*
Performance Analysis

The time complexity of executing an ls command is O\big(m+n+klog(k)\big)O(m+n+klog(k)).
 Here, mm refers to the length of the input string. We need to scan the input string once to split it and determine the
  various levels. nn refers to the depth of the last directory level in the given input for ls. This factor is taken 
  because we need to enter nn levels of the tree structure to reach the last level.
   kk refers to the number of entries(files+subdirectories) in the last level directory(in the current input). 
   We need to sort these names giving a factor of klog(k)klog(k).

The time complexity of executing an mkdir command is O(m+n)O(m+n). Here, mm refers to the length of the input string.
 We need to scan the input string once to split it and determine the various levels.
  nn refers to the depth of the last directory level in the mkdir input. This factor is taken because we need to
   enter nn levels of the tree structure to reach the last level.

The time complexity of both addContentToFile and readContentFromFile is O(m+n)O(m+n). Here, mm refers to 
the length of the input string. We need to scan the input string once to split it and determine the various levels. 
nn refers to the depth of the file name in the current input. This factor is taken because we need to enter nn levels of 
the tree structure to reach the level where the files's contents need to be added/read from.

The advantage of this scheme of maintaining the directory structure is that it is expandable to include even more 
commands easily. For example, rmdir to remove a directory given an input directory path. We need to simply reach to 
the destined directory level and remove the corresponding directory entry from the corresponding dirsdirs keys.

Renaming files/directories is also very simple, since all we need to do is to create a temporary copy of the directory 
structure/file with a new name and delete the last entry.

Relocating a hierarchichal subdirectory structure from one directory to the other is also very easy, since, 
all we need to do is obtain the address for the corresponding subdirectory class, and assign the same at the new positon 
in the new directory structure.

Extracting only directories or files list on any path is easy in this case, since we maintain separate entires 
for dirsdirs and filesfiles.
*/
class Dir {
  constructor() {
    this.dirs = new Map();
    this.files = new Map();
  }
}
class FileSystem {
  constructor() {
    this.root = new Dir();
  }
  mkdir(path) {
    let currentDir = this.root;
    let ds = path.split('/');
    for (let i = 1; i < ds.length; i++) {
      if (!currentDir.dirs.has(ds[i]))
        currentDir.dirs.set(ds[i], new Dir());
      currentDir = currentDir.dirs.get(ds[i]);
    }
  }
  rmdir(path) {
    let currentDir = this.root;
    let ds = path.split('/');
    for (let i = 1; i < ds.length - 1; i++) {
      currentDir = currentDir.dirs.get(ds[i]);
    }
    currentDir.dirs.delete(ds[ds.length - 1]);
  }
  rename(path, newName) {
    let currentDir = this.root;
    let ds = path.split('/');
    for (let i = 1; i < ds.length - 1; i++) {
      currentDir = currentDir.dirs.get(ds[i]);
    }
    if (currentDir.dirs.has(ds[ds.length - 1])) {
      let tmp = currentDir.dirs.get(ds[ds.length - 1]);
      currentDir.dirs.delete(ds[ds.length - 1]);
      currentDir.dirs.set(newName, tmp);
    } else if (currentDir.files.has(ds[ds.length - 1])) {
      let tmp = currentDir.files.get(ds[ds.length - 1]);
      currentDir.files.delete(ds[ds.length - 1]);
      currentDir.files.set(newName, tmp);
    }

  }
  ls(path) {
    let currentDir = this.root;
    let files;
    if (path !== '/') {
      let ds = path.split('/');
      for (let i = 1; i < ds.length - 1; i++) {
        currentDir = currentDir.dirs.get(ds[i]);
      }
      if (currentDir.files.has(ds[ds.length - 1])) {
        files = [ds[ds.length - 1]];
        return files;
      } else {
        currentDir = currentDir.dirs.get(ds[ds.length - 1]);
      }
    }
    if (!currentDir) return [];
    files = Array.from(currentDir.dirs.keys());
    files = [...files, ...Array.from(currentDir.files.keys())];
    files.sort();
    return files;
  }

  addContentToFile(filePath, content) {
    let currentDir = this.root;
    let ds = filePath.split('/');
    for (let i = 1; i < ds.length - 1; i++) {
      currentDir = currentDir.dirs.get(ds[i]);
    }
    currentDir.files.set(ds[ds.length - 1], (currentDir.files.get(ds[ds.length - 1]) || '') + content);
  }

  readContentFromFile(filePath) {
    let currentDir = this.root;
    let ds = filePath.split('/');
    for (let i = 1; i < ds.length - 1; i++) {
      currentDir = currentDir.dirs.get(ds[i]);
    }
    return currentDir.files.get(ds[ds.length - 1]);
  }
}
let fs = new FileSystem();
fs.mkdir('/root')
fs.mkdir('/root/folder1')
fs.mkdir('/root/folder2')
fs.mkdir('/root/folder2/folder2_2')
fs.addContentToFile('/root/folder2/file2.txt', 'HI there')

console.log(fs.ls('/root/folder2'))
console.log(fs.readContentFromFile('/root/folder2/file1.txt'))
fs.rename('/root/folder2/folder2_2', 'folder22')
fs.rename('/root/folder2/file2.txt', 'file1.pdf')
console.log(fs.ls('/root/folder2'))
/**
 * Your FileSystem object will be instantiated and called as such:
 * FileSystem obj = new FileSystem();
 * List<String> param_1 = obj.ls(path);
 * obj.mkdir(path);
 * obj.addContentToFile(filePath,content);
 * String param_4 = obj.readContentFromFile(filePath);
 */