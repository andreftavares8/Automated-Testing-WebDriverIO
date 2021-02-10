const internetPage = require("../pages/internet_page")

describe("Interacting width elements",function(){
  it("Get text for element",() =>{
    browser.url('/')
    let text = $("#page-footer").getText()
    console.log(text)
    internetPage.getLiText()
    internetPage.getSpecificElementText(3)
  })
  it("Is footer Displayed", () =>{
    console.log(internetPage.pageFooter.isDisplayed())
  })
  it("Does the head exist?",()=>{
    console.log(internetPage.pageHeader.isExisting())
  })
  it("Is footer in viewport?",()=>{
    console.log(internetPage.pageFooter.isDisplayedInViewport())
  })
  it("Is header in viewport?",()=>{
    console.log(internetPage.pageHeader.isDisplayedInViewport())
  })
  it("Is subheader enabled?",()=>{
    console.log(internetPage.subHeading.isEnabled())
  })
  it("Click Element",()=>{
    internetPage.clickOnLink()
  })
})
