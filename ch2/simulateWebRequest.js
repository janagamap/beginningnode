function longRunningOperation(callback) {
  // simulate a 3 second operation
  setTimeout(callback, 3000);
}

function webRequest(request) {
  console.log('starting a long operation for request:', request.id);
  longRunningOperation(function(){
    console.log('enging a log operation for request:', request.id, new Date());
  });
}


//simulate a web request
//webRequest({id: 1});
//simulate a second request
//webRequest({id: 2});
for(var i = 0; i<20; i++){
  webRequest({id: i});
}
