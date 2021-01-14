function main() {
  var l = window.location.href;
  var arr = l.split('/');
  var current = arr[arr.length-1];

  if (current == "index.html") {
    home = document.getElementById('home');
    home.className = 'selected';
  } else if (current == "packages.html") {
    packages = document.getElementById('packages');
    packages.className = 'selected';
  } else if (current == "contact.html") {
    contact = document.getElementById('contact');
    contact.className = 'selected';
  } else if (current == "guide.html") {
    guide = document.getElementById('guide');
    guide.className = 'selected';
  } else if (current == "team.html") {
    team = document.getElementById('team');
    team.className = 'selected';
  } else if (current == "") {

  }
}

main();
