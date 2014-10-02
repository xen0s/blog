$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("DKy5dGVYjWPsThtwy7sj4zhAcDN41aNkWDXkVtTR", "8FIjhKE7u6gHEc9tdnZzbpjKsKLDAthKSVO2CX81"); 
	
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});