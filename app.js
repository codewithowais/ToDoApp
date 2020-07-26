function addItem() {
    //Step 1: Get Input value
    var inputElement = document.getElementById('input')

    //Step 2.1: Create a <li> element & attach input value
    var listItem = document.createElement('LI')
    listItem.setAttribute('class','task')
    listItem.innerHTML = "<span>" + inputElement.value + "</span>"
    
    //Step 2.2: Create a delete <button> element & attach it to <li>
    var deleteButton = document.createElement('BUTTON')
    // var deleteButton = document.createElement('IMG')
    
    deleteButton.innerHTML = "Delete"
    deleteButton.setAttribute('onclick', 'deleteItem(event)')
    deleteButton.setAttribute('src', 'image.png')
    // deleteButton.setAttribute('width', '20px')
    // deleteButton.setAttribute('height', '30px')
    deleteButton.setAttribute('class', 'delete')
    
    
    // deleteButton.setAttribute('class', 'fa fa-trash-alt')
    listItem.appendChild(deleteButton)
    
    //Step 2.3: Create a edit <button> element & attach it to <li>
    var editButton = document.createElement('BUTTON')
    // var editButton = document.createElement('IMG')
    editButton.innerHTML = "Edit"
    
    // editButton.innerHTML = ""
    editButton.setAttribute('onclick', 'editItem(event)')
    // editButton.setAttribute('src', 'pencil.png')
    // editButton.setAttribute('width', '20px')
    // editButton.setAttribute('height', '30px')
    editButton.setAttribute('class', 'edit')

    // deleteButton.setAttribute('class', 'fa fa-pencil')
    listItem.appendChild(editButton)
    
    //Step 3: Attach this element to HTML
    var list = document.getElementById('list')
    list.appendChild(listItem)
    
    //Step 4: Empty Input Value
    inputElement.value = ""

    // console.log('list***', list.children.length)
    // if (list.children.length === 5) {
    //     // window.location.replace('Contact/Contact-Us.html')
    //     window.location.href = 'Contact/Contact-Us.html'
    // }
}

function deleteItem(event) {
    var listItem = event.target.parentElement
    listItem.remove()
}

function editItem(event) {
    //remove any current-edit id item
    var currentItem = document.getElementById('current-edit')
    if (currentItem) {
        currentItem.removeAttribute('id')
    }

    var valueElement = event.target.parentElement.children[0]
    document.getElementById('input').value = valueElement.innerHTML
    valueElement.setAttribute('id', 'current-edit')
    var inputArea = document.getElementById('input-area')
    var button = inputArea.children[1]
    button.innerHTML = 'Update'
    button.setAttribute('onclick', 'updateItem()')
}

function updateItem() {
    var inputValue = document.getElementById('input')
    var currentItem = document.getElementById('current-edit')
    currentItem.innerHTML = inputValue.value
    currentItem.removeAttribute('id')

    inputValue.value = ""

    var inputArea = document.getElementById('input-area')
    var button = inputArea.children[1]
    button.innerHTML = 'Add'
    button.setAttribute('onclick', 'addItem()')
}
