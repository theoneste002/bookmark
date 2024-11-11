let bookmarks = [];

function addBookmark() {
  const nameInput = document.getElementById('websiteName');
  const urlInput = document.getElementById('websiteURL');
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (!name || !url) {
    alert("Please enter both a name and a URL.");
    return;
  }

  bookmarks.push({ name, url });
  nameInput.value = '';
  urlInput.value = '';
  displayBookmarks();
}

function displayBookmarks() {
  const bookmarkList = document.getElementById('bookmarkList');
  bookmarkList.innerHTML = '';
  
  bookmarks.forEach((bookmark, index) => {
    const bookmarkCard = document.createElement('div');
    bookmarkCard.className = 'bookmark';
    
    const title = document.createElement('h3');
    title.textContent = bookmark.name;
    bookmarkCard.appendChild(title);
    
    const link = document.createElement('a');
    link.href = bookmark.url;
    link.textContent = bookmark.url;
    link.target = '_blank';
    bookmarkCard.appendChild(link);
    
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';
    
    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    editButton.onclick = () => editBookmark(index);
    buttonGroup.appendChild(editButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteBookmark(index);
    buttonGroup.appendChild(deleteButton);
    
    bookmarkCard.appendChild(buttonGroup);
    bookmarkList.appendChild(bookmarkCard);
  });
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  displayBookmarks();
}

function editBookmark(index) {
  const newName = prompt("Enter new name:", bookmarks[index].name);
  const newURL = prompt("Enter new URL:", bookmarks[index].url);
  
  if (newName && newURL) {
    bookmarks[index].name = newName;
    bookmarks[index].url = newURL;
    displayBookmarks();
  }
}
