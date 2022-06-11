const { join } = require("path");
const { readFile, writeFile, existsSync } = require("fs");
const { createInterface } = require("readline");
const util = require("util");

class Templater {
  constructor(name, type) {
    this.name = name;
    this.fileName = name.toLowerCase().replace(/ /g, "-");
    this.dirName = type.toLowerCase().replace(/ /g, "-");
    this.type = type;

    this.create();
  }

  create() {
    // Check if the folder exists
    this.checkExists();
    // Create new file
    this.createFile();
    // Update README.md for the directory
    this.updateTOC();
  }

  createFile() {
    writeFile(
      join(__dirname, `../${this.dirName}/${this.fileName}.md`),
      `# ${this.type}: ${this.name}\n`,
      (err) => {
        if (err) console.error(err);
        else console.log(`Wrote ${this.fileName} ✅`);
      }
    );
  }

  updateTOC() {
    let readMe = join(__dirname, `../${this.dirName}/README.md`);
    readFile(readMe, (err, contents) => {
      if (err) console.error(err);
      else {
        writeFile(readMe, this.addToTOC(contents.toString()), (err) => {
          if (err) console.error(err);
          else console.log(`Updated ${this.dirName}/README.md ✅`);
        });
      }
    });
  }

  addToTOC(txt) {
    let ulStart = txt.indexOf("- ");
    let ulEnd = null;

    for (let i = ulStart; i < txt.length; i++) {
      if (txt[i] == "#" || i == txt.length - 1) {
        ulEnd = i;
        break;
      }
    }

    console.log(txt.slice(ulStart, ulEnd));

    return (
      txt.slice(0, ulStart) +
      txt
        .slice(ulStart, ulEnd)
        .concat(`\n- [${this.name}](${this.fileName}.md)`) +
      txt.slice(ulEnd)
    );
  }

  checkExists() {
    return existsSync(join(__dirname, `../${this.dirName}`));
  }
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

async function prompts() {
  let name = await question("Name: ");
  rl.close();
  new Templater(name, "Reviews");
}

prompts();
