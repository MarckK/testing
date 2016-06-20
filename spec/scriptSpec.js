
describe('requester', function() {

  beforeEach(function(){
    xhr = new XMLHttpRequest();
  });

  it('should make an Ajax request to the correct URL', function(){
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    var url = 'ProductData.json';
    requester(url);
    console.log(XMLHttpRequest.prototype.open.calls.mostRecent());
    expect(XMLHttpRequest.prototype.open.calls.mostRecent().args[1]).toEqual(url);
  });

  it('should receive a successful response', function() {
    spyOn(XMLHttpRequest.prototype, 'onreadystatechange').and.callFake(function(args){
      args.onSuccess();
    });

    var callbacks = {
      onSuccess: jasmine.createSpy(),
      onError: jasmine.createSpy(),
    };
    var url = 'ProductData.json';
    requester(url, callbacks);
    //XMLHttp.prototype.readyState = 4
    expect(callbacks.onSuccess).toHaveBeenCalled();

  });
});
