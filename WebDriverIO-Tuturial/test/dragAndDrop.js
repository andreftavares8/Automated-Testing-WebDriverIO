internetPage = require('../pages/internet_page')

describe('Drag and Drop', function () {
  it.skip('should drag column A to column B',()=>{
    browser.url(`${browser.options.baseUrl}/drag_and_drop`)
    internetPage.dragColumnAtoColumnB()
    browser.pause(3000)
    assert.equal("A", internetPage.columnBHeader.getText())
  })
  it('should drag and drop',()=>{
    browser.url(`https://crossbrowsertesting.github.io/drag-and-drop.html`)
    internetPage.dragDraggableDroppable()
    assert.equal("Dropped!", internetPage.droppsbleParagraph.getText())
  })
})