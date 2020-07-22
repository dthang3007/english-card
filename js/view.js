const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'collectionUserScreen':
            document.getElementById('app').innerHTML = component.collectionUserScreen
            let clickNav=document.getElementById('nav-create')
            clickNav.addEventListener('click',()=>{
                view.setActiveScreen("createCardScreen")
            })
            model.loadCollectionUser()
            break
        case 'cardsUserScreen':
            document.getElementById('app').innerHTML = component.cardUserScreen

            break
        case 'createCardScreen' :
            document.getElementById('app').innerHTML=component.createCards
            break   
    }
}
view.addCollectionUser = (collection) => {
    const collectionWrapper = document.createElement('div')
    collectionWrapper.classList.add("collection-item")
    collectionWrapper.id = collection.id
    collectionWrapper.innerHTML = `    
    <p>${collection.collectionName}</p>
    <img src="${collection.imageCover}" alt="">`
    const listCollection = document.querySelector('.list-collections-card')
    listCollection.appendChild(collectionWrapper)
    collectionWrapper.addEventListener("click", () => {
        view.setActiveScreen("cardsUserScreen")
        model.loadCardsUser(collection.id)
   
    })
}
view.showCollections = () => {
    for (let oneCollection of model.collectionsUser) {
        view.addCollectionUser(oneCollection)

    }
}
view.addCardUser = (card) => {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card')
    cardWrapper.innerHTML = `
    <div class="font-card">
        <div class="image-card">
            <img src="${card.imageVocab}" alt="">
        </div>
        <div class="main-vocab">
            <div class="vocab" style="font-size: 55px;">${card.vocab}</div>
            <div class="pronun" style="font-size: 30px;"><i class="fas fa-volume-up"></i>${card.pronunciation}</div>
        </div>
    </div>
    <div class="back-card">
        <div class="listNotes" id=${card.id}>
            <h3 class="meaning">Meaning: ${card.meaning}</h3>
            <h3 class="same-meaning">Same meaning: ${card.sameMeaning}</h3>
            <h3>Example: </h3>
        </div>
    </div>`
    const listCard = document.querySelector('.main-add-card')
    listCard.appendChild(cardWrapper)
}
view.showCards = () => {
    for (let oneCard of model.cardsUser) {
        view.addCardUser(oneCard)
        view.showNotes(oneCard)
    }
}
view.addNote = (note, id) => {
    const noteWrapper = document.createElement('p')
    noteWrapper.classList.add('notes')
    noteWrapper.innerText = `${note}`
    const listNotes = document.getElementById(`${id}`)
    listNotes.appendChild(noteWrapper)
}
view.showNotes = (note) => {
    for (let oneNote of note.notes) {
        view.addNote(oneNote, note.id)
    }
}
view.showInforCollection = (infor,number) => {
    const inforCollection = document.querySelector('.infor-collection-card')
    inforCollection.innerHTML = `    
    <div class="image-collection-cover">
    <img src="${infor.imageCover}" alt="">
    </div>
    <p>Chủ đề: ${infor.collectionName}</p>
    <p>Số thẻ:${number} </p>
    <p>Của: ${infor.owner}</p>`
}
view.showInforUser=(user)=>{
    const inforUser=document.getElementById('inforUser')
    inforUser.innerHTML=`
    <div class="ava-user">
    <img src="${user.photoUrl}" alt="">
    </div>
    <div class="infor-user">
    <p>Name: ${user.displayName}</p>
    <p>Bo the: ${user.collection}</p>
    </div>`
}



