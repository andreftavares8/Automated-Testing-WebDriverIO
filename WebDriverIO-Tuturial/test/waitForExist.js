internetPage = require('../pages/internet_page')

describe('Wait for Exist', function () {
  it('should wait until the delete button exists',()=>{
    browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
    internetPage.clickExampleButton()
    internetPage.deleteButton(1).waitForExist()
    assert.equal(true, internetPage.deleteButton(1).isExisting())
    browser.pause(2000)
  })
  it('should wait for the delete button to not exist',()=>{
    internetPage.clickDeleteButton()
    internetPage.deleteButton(1).waitForExist(500,true)
    assert.equal(false, internetPage.deleteButton(1).isExisting())
    browser.pause(2000)
  })
  
  
})