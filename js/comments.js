'use strict';

/* global $, jQuery */
function 
function solution() {

    $(".comment-list").map(function() {
        // de render here
    });


    var listCount = $(".comment-list").attr("data-count");
    var dataUrl = "https://www.example.com/comments?count="+listCount
    $(".comment-list").append('<span>Loading...</span>');
    $.ajax({
        method: 'GET',
        url: dataUrl,
      }).success(function(data) {

      }

}