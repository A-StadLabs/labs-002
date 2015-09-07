/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // This function simply redirects the user to the right html file.

   var redirect = function(location){
    window.location = location;
  };

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  var ofuser;
  var localuser;

  app._ofuserFound = function(){
    ofuser = true;
    app.redirection();
  };

  app._ofuserEmpty = function(){
    ofuser = false;
    app.redirection();
  };

  app._userFound = function(){
    localuser = true;
    app.redirection();
  };

  app._userEmpty = function(){
    localuser = false;
    app.redirection();
  };

  app.redirection = function(){
    if(localuser==true&&ofuser==true){
      redirect('user.html');
    };
    if(ofuser==true&&localuser==false){
      redirect('newuser.html');
    };
    if(ofuser==false&&localuser==false){
      redirect('newopenfire.html');
    };
    if(ofuser==false&&localuser==true){
      redirect('newopenfire.html');
    };
  };

})(document);
