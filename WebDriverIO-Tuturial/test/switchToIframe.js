internetPage = require('../pages/internet_page')

describe('Switch to switch Iframe', function () {
  it('should switch to iframe',()=>{
    browser.url(`${browser.options.baseUrl}/iframe`)
    internetPage.h3Header.waitForDisplayed()
    internetPage.iframe.waitForDisplayed()
    browser.switchToFrame(internetPage.iframe)
    internetPage.sendTextToBody('This is the test in the iframe body')
    assert.equal('This is the test in the iframe body', internetPage.iframeBody.getText())
  })
})