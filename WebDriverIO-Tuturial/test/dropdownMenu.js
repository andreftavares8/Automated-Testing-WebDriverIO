internetPage = require('../pages/internet_page')

describe('dropdown menu', function () {
  it('should the select option 1',()=>{
    browser.url(`${browser.options.baseUrl}/dropdown`)
    internetPage.clickDropdownMenu()
    internetPage.clickDropdownMenuOption1()
    assert.equal(true, internetPage.clickDropdownMenuOption1.isSelected())
  })
  it('should the select option 2',()=>{
    internetPage.clickDropdownMenu()
    internetPage.clickDropdownMenuOption2()
    assert.equal(true, internetPage.clickDropdownMenuOption2.isSelected())
  })
})