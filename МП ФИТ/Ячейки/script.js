let sections = document.querySelectorAll('.section')
let activeSection = document.querySelector('.section', '.element-active')
for (let section of sections) {    
    function addSection() {
        if (activeSection) {
            const newSection = section.cloneNode(true);
            newSection.classList.remove('element-active');
            activeSection.after(newSection);
        }

        else {
            const newSection = section.cloneNode(true);
            section.after(newSection);
        }
    }
}

let rows = document.querySelectorAll('.row')
let activeRow = document.querySelector('.row', '.element-active')
for (let row of rows) {    
    function addRow() {
        if (activeRow) {
            const newRow = row.cloneNode(true);
            newRow.classList.remove('element-active');
            activeRow.after(newRow);
        }

        else {
            const newSection = row.cloneNode(true);
            row.after(newRow);
        }
    }
}

let racks = document.querySelectorAll('.rack')
let activeRack = document.querySelector('.rack', '.element-active')
for (let rack of racks) {    
    function addRack() {
        if (activeRack) {
            const newRack = rack.cloneNode(true);
            newRack.classList.remove('element-active');
            activeRack.after(newRack);
        }

        else {
            const newSection = rack.cloneNode(true);
            rack.after(newRack);
        }
    }
}




let sectionTitles = document.querySelectorAll('.section__title');

for (let sectionTitle of sectionTitles) {

    sectionTitle.addEventListener('mouseover', ()=> {
            sectionTitle.parentElement.classList.add('element-hover')            
            // button.style.display = 'flex'
    } )
    
    sectionTitle.addEventListener('mouseout', ()=> {
            sectionTitle.parentElement.classList.remove('element-hover')
            // button.style.display = 'none'
    } )

    function showHideSection() {
        state = sectionTitle.parentElement.classList.contains('element-active');
        let addSection = document.querySelector('#add-section');
        if (state) {
            sectionTitle.parentElement.classList.remove('element-active');
            addSection.style.display = 'none'
        }

        else {
            sectionTitle.parentElement.classList.add('element-active');
            addSection.style.display = 'flex'
        }
    }
};


let rowTitles = document.querySelectorAll('.row__title');

for (let rowTitle of rowTitles) {
    rowTitle.addEventListener('mouseover', ()=> {
            rowTitle.parentElement.classList.add('element-hover')
    } )
    
    rowTitle.addEventListener('mouseout', ()=> {
            rowTitle.parentElement.classList.remove('element-hover')
    } )

    function showHideRow() {
        state = rowTitle.parentElement.classList.contains('element-active');
        let addRow = document.querySelector('#add-row');
        if (state) {
            rowTitle.parentElement.classList.remove('element-active');
            addRow.style.display = 'none'
        }

        else {
            rowTitle.parentElement.classList.add('element-active');
            addRow.style.display = 'flex'
        }
    }
};

let rackTitles = document.querySelectorAll('.rack__title');

for (let rackTitle of rackTitles) {
    rackTitle.addEventListener('mouseover', ()=> {
            rackTitle.parentElement.classList.add('element-hover')
    } )
    
    rackTitle.addEventListener('mouseout', ()=> {
            rackTitle.parentElement.classList.remove('element-hover')
    } )

    function showHideRack() {
        state = rackTitle.parentElement.classList.contains('element-active');
        let addRow = document.querySelector('#add-rack');
        if (state) {
            rackTitle.parentElement.classList.remove('element-active');
            addRow.style.display = 'none'
        }

        else {
            rackTitle.parentElement.classList.add('element-active');
            addRow.style.display = 'flex'
        }
    }
};





