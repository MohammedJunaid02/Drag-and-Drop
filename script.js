let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");

let selected=null;


// Just to drag and drop the list i.e without maintaining the insertion order at the specified position
/*for(listItem of lists){
    listItem.addEventListener("dragstart",function(e){
        selected=e.target;
    });

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop",function(e){
            e.preventDefault();
            if(selected){
                rightBox.appendChild(selected);
                selected=null;
            }
        });

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected=null;
        });

}*/

// Just to drag and drop the list i.e with maintaining the insertion order at the specified position
for (listItem of lists) {
    listItem.addEventListener("dragstart", function (e) {
        selected = e.target;
    });
}


//for adding items from left to right
rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(rightBox, e.clientY);
    if (selected && afterElement) {
        rightBox.insertBefore(selected, afterElement);
    }
});

rightBox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.list:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;

}





//for adding back items from right to left
leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(leftBox, e.clientY);
    if (selected && afterElement) {
        leftBox.insertBefore(selected, afterElement);
    }
});

leftBox.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.list:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}





