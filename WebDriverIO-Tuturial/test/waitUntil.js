internetPage = require('../pages/internet_page')

describe('Wait Until', function () {
  it('should wait until the button text chances to add',()=>{
    browser.url(`${browser.options.baseUrl}/dynamic_controls`)
    internetPage.clickPageButton()
    browser.waitUntil(() =>{
      return internetPage.pageButton.getText() === 'Add'
    }, 6000, 'Expect button text to chance')
    assert.equal('Add', internetPage.pageButton.getText())
  })  
  it('should wait until the button text chances to remove',()=>{
    internetPage.clickPageButton()
    browser.waitUntil(() =>{
      return internetPage.pageButton.getText() === 'Remove'
    }, 6000, 'Expect button text to chance')
    assert.equal('Remove', internetPage.pageButton.getText())
  })  
})