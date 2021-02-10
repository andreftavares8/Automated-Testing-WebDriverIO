internetPage = require('../pages/internet_page')

describe('Switch Window', function () {
  it('should switch to the next window',()=>{
    browser.url(`${browser.options.baseUrl}/windows`)
    internetPage.clickHereLink()
    browser.switchWindow(`${browser.options.baseUrl}/windows/new`)
    assert.equal(true, internetPage.h3Header.isExisting())
    assert.equal(true, internetPage.h3Header.isDisplayed())
    assert.equal('New Window', internetPage.h3Header.getText())
    browser.pause(3000)
  })
})