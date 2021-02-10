internetPage = require('../pages/internet_page')

describe('Wait for Enable', function () {
  it('should wait for the input fiel to be enable',()=>{
    browser.url(`${browser.options.baseUrl}/dynamic_controls`)
    internetPage.clickEnableButton()
    internetPage.inputEnableField.waitForEnabled(4000)
    assert.equal(true, internetPage.inputEnableField.isEnabled())
    browser.debug()
  })
  it('should wait for the input fiel to be disable',()=>{
    internetPage.clickEnableButton()
    internetPage.inputEnableField.waitForEnabled(4000, true)
    assert.equal(true, internetPage.inputEnableField.isEnabled())
  })
  
  
})