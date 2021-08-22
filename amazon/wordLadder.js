class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new Node(val);
    const { head } = this;
    this.head = node;
    if (!head) {
      this.tail = node;
    } else {
      node.next = head;
      head.prev = node;
    }
    this.size++;
  }
  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (this.size === 0 || index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      const { head } = this;
      this.head = head.next;
      if (this.head) {
        this.head.prev = null;
      }
      this.size--;
      return head;
    }
    if (index === this.size - 1) {
      const { tail } = this;
      this.tail = tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.size--;
      return tail;
    }

    const node = this._getNode(index);
    [node.prev.next, node.next.prev] = [node.next, node.prev];
    this.size--;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
var ladderLength = function (beginWord, endWord, wordList) {
  // Since all words are of same length.
  let L = beginWord.length;

  // Dictionary to hold combination of words that can be formed,
  // from any given word. By changing one letter at a time.
  let allComboDict = new Map();

  wordList.forEach(
    word => {
      for (let i = 0; i < L; i++) {
        // Key is the generic word
        // Value is a list of words which have the same intermediate generic word.
        let newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);
        let transformations = allComboDict.get(newWord) || [];
        transformations.push(word);
        allComboDict.set(newWord, transformations);
      }
    });
  // Queue for BFS
  // Queue < Pair < String, Integer >> Q = new LinkedList<Pair<String, Integer>>();
  let Q = new LinkedList();
  Q.addAtHead([beginWord, 1]);
  // Visited to make sure we don't repeat processing same word.
  let visited = new Map();
  visited.set(beginWord, true);
  while (Q.size) {
    let node = Q.deleteAtIndex(Q.size - 1);
    let word = node.val[0];
    let level = node.val[1];
    for (let i = 0; i < L; i++) {

      // Intermediate words for current word
      let newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);

      // Next states are all the words which share the same intermediate state.
      for (let adjacentWord of (allComboDict.get(newWord) || [])) {
        // If at any point if we find what we are looking for
        // i.e. the end word - we can return with the answer.
        if (adjacentWord === endWord) {
          return level + 1;
        }
        // Otherwise, add it to the BFS Queue. Also mark it visited
        if (!visited.has(adjacentWord)) {
          visited.set(adjacentWord, true);
          Q.addAtHead([adjacentWord, level + 1]);
        }
      }
    }
  }

  return 0;
};

console.log(ladderLength("cet",
  "ism",
  ["kid", "tag", "pup", "ail", "tun", "woo", "erg", "luz", "brr", "gay", "sip", "kay", "per", "val", "mes", "ohs", "now", "boa", "cet", "pal", "bar", "die", "war", "hay", "eco", "pub", "lob", "rue", "fry", "lit", "rex", "jan", "cot", "bid", "ali", "pay", "col", "gum", "ger", "row", "won", "dan", "rum", "fad", "tut", "sag", "yip", "sui", "ark", "has", "zip", "fez", "own", "ump", "dis", "ads", "max", "jaw", "out", "btu", "ana", "gap", "cry", "led", "abe", "box", "ore", "pig", "fie", "toy", "fat", "cal", "lie", "noh", "sew", "ono", "tam", "flu", "mgm", "ply", "awe", "pry", "tit", "tie", "yet", "too", "tax", "jim", "san", "pan", "map", "ski", "ova", "wed", "non", "wac", "nut", "why", "bye", "lye", "oct", "old", "fin", "feb", "chi", "sap", "owl", "log", "tod", "dot", "bow", "fob", "for", "joe", "ivy", "fan", "age", "fax", "hip", "jib", "mel", "hus", "sob", "ifs", "tab", "ara", "dab", "jag", "jar", "arm", "lot", "tom", "sax", "tex", "yum", "pei", "wen", "wry", "ire", "irk", "far", "mew", "wit", "doe", "gas", "rte", "ian", "pot", "ask", "wag", "hag", "amy", "nag", "ron", "soy", "gin", "don", "tug", "fay", "vic", "boo", "nam", "ave", "buy", "sop", "but", "orb", "fen", "paw", "his", "sub", "bob", "yea", "oft", "inn", "rod", "yam", "pew", "web", "hod", "hun", "gyp", "wei", "wis", "rob", "gad", "pie", "mon", "dog", "bib", "rub", "ere", "dig", "era", "cat", "fox", "bee", "mod", "day", "apr", "vie", "nev", "jam", "pam", "new", "aye", "ani", "and", "ibm", "yap", "can", "pyx", "tar", "kin", "fog", "hum", "pip", "cup", "dye", "lyx", "jog", "nun", "par", "wan", "fey", "bus", "oak", "bad", "ats", "set", "qom", "vat", "eat", "pus", "rev", "axe", "ion", "six", "ila", "lao", "mom", "mas", "pro", "few", "opt", "poe", "art", "ash", "oar", "cap", "lop", "may", "shy", "rid", "bat", "sum", "rim", "fee", "bmw", "sky", "maj", "hue", "thy", "ava", "rap", "den", "fla", "auk", "cox", "ibo", "hey", "saw", "vim", "sec", "ltd", "you", "its", "tat", "dew", "eva", "tog", "ram", "let", "see", "zit", "maw", "nix", "ate", "gig", "rep", "owe", "ind", "hog", "eve", "sam", "zoo", "any", "dow", "cod", "bed", "vet", "ham", "sis", "hex", "via", "fir", "nod", "mao", "aug", "mum", "hoe", "bah", "hal", "keg", "hew", "zed", "tow", "gog", "ass", "dem", "who", "bet", "gos", "son", "ear", "spy", "kit", "boy", "due", "sen", "oaf", "mix", "hep", "fur", "ada", "bin", "nil", "mia", "ewe", "hit", "fix", "sad", "rib", "eye", "hop", "haw", "wax", "mid", "tad", "ken", "wad", "rye", "pap", "bog", "gut", "ito", "woe", "our", "ado", "sin", "mad", "ray", "hon", "roy", "dip", "hen", "iva", "lug", "asp", "hui", "yak", "bay", "poi", "yep", "bun", "try", "lad", "elm", "nat", "wyo", "gym", "dug", "toe", "dee", "wig", "sly", "rip", "geo", "cog", "pas", "zen", "odd", "nan", "lay", "pod", "fit", "hem", "joy", "bum", "rio", "yon", "dec", "leg", "put", "sue", "dim", "pet", "yaw", "nub", "bit", "bur", "sid", "sun", "oil", "red", "doc", "moe", "caw", "eel", "dix", "cub", "end", "gem", "off", "yew", "hug", "pop", "tub", "sgt", "lid", "pun", "ton", "sol", "din", "yup", "jab", "pea", "bug", "gag", "mil", "jig", "hub", "low", "did", "tin", "get", "gte", "sox", "lei", "mig", "fig", "lon", "use", "ban", "flo", "nov", "jut", "bag", "mir", "sty", "lap", "two", "ins", "con", "ant", "net", "tux", "ode", "stu", "mug", "cad", "nap", "gun", "fop", "tot", "sow", "sal", "sic", "ted", "wot", "del", "imp", "cob", "way", "ann", "tan", "mci", "job", "wet", "ism", "err", "him", "all", "pad", "hah", "hie", "aim", "ike", "jed", "ego", "mac", "baa", "min", "com", "ill", "was", "cab", "ago", "ina", "big", "ilk", "gal", "tap", "duh", "ola", "ran", "lab", "top", "gob", "hot", "ora", "tia", "kip", "han", "met", "hut", "she", "sac", "fed", "goo", "tee", "ell", "not", "act", "gil", "rut", "ala", "ape", "rig", "cid", "god", "duo", "lin", "aid", "gel", "awl", "lag", "elf", "liz", "ref", "aha", "fib", "oho", "tho", "her", "nor", "ace", "adz", "fun", "ned", "coo", "win", "tao", "coy", "van", "man", "pit", "guy", "foe", "hid", "mai", "sup", "jay", "hob", "mow", "jot", "are", "pol", "arc", "lax", "aft", "alb", "len", "air", "pug", "pox", "vow", "got", "meg", "zoe", "amp", "ale", "bud", "gee", "pin", "dun", "pat", "ten", "mob"]))