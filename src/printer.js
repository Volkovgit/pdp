function Printer() {
  const PrinterObject = {
    print(text) {
      console.log(text);
    },
  };
  return PrinterObject;
}

module.exports = Printer;
