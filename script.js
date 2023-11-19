// ==UserScript==
// @name         Redirect eBay Top Level Domain
// @description  Redirects eBay URLs to your desired location. Useful for when you get eBay links from friends in other countries and want to see your local version.
// @author       joshmcorreia
// @match        *://www.ebay.*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

var desired_top_level_domain = ".com"; // CHANGE ME TO REFLECT YOUR DESIRED DOMAIN

const url_regex = /(?<=ebay).*?(?=\/)/

var old_url_path = window.location.href;
var matches = old_url_path.match(url_regex);
if (!matches.includes(desired_top_level_domain)) {
  var new_url_path = old_url_path.replace(url_regex, desired_top_level_domain);
  window.location.replace(new_url_path);
}
