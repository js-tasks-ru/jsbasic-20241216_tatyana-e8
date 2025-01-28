function makeFriendsList(friends) {
  let html = '';
  friends.forEach((elem) => {
    html += '<li>';
    html += elem.firstName;
    html += ' ';
    html += elem.lastName;
    html += '</li>';
  });

  const ul = document.createElement('ul');
  ul.innerHTML = html;
  return ul;
}
