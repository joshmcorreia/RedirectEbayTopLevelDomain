// ==UserScript==
// @name         Redirect eBay Canada to eBay USA
// @description  Redirects eBay Canada URLs to eBay USA URLs. Useful for when you get eBay links from friends in Canada and want to see the USA version of eBay.
// @author       joshmcorreia
// @match        *://*.ebay.ca/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

var old_url_path = window.location.href;
var ebay_canada_string = "ebay.ca";
var ebay_usa_string = "ebay.com";
if (old_url_path.includes(ebay_canada_string)) {
  var new_url_path = old_url_path.replace(ebay_canada_string, ebay_usa_string);
  window.location.replace(new_url_path);
}
