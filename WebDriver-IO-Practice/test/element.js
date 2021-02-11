describe("interaction with web element", function(){

  it("enter value in a field", function(){
    browser.url('/');
    const search = $('#twotabsearchtextbox');
    search.setValue('Apple Mac Book');
  });
  it("get text of field", function(){
    const span = $('#glow-ingress-line2');
    let text = span.getText();
    console.log(text);
  });
  it("click on a field", function(){
    const btnSearch = $('#nav-search-submit-button');
    btnSearch.click();
  });
});
