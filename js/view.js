const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'collectionUserScreen':
            document.getElementById('app').innerHTML = component.collectionUserScreen
            let clickNav = document.getElementById('nav-create')
            clickNav.addEventListener('click', () => {
                view.setActiveScreen("createCardScreen")
            })
            model.loadCollectionUser()
            break
        case 'cardsUserScreen':
            document.getElementById('app').innerHTML = component.cardUserScreen

            break
        case 'createCardScreen':
            document.getElementById('app').innerHTML = component.createCards
            $("#collectionCard").change(function () {
                readURL(this, "imageCollectionCard");
            })
            let id = 0
            document.getElementById('button-add-card').addEventListener('click', () => {
                if (view.addFormAddCard(id)) {
                    id++
                }
                console.log(id)
            })
            document.getElementById("firebase-add").addEventListener('submit', (e) => {
                e.preventDefault()
                controller.check()
            })
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
            <div class="pronun" style="font-size: 30px;">${card.pronunciation}</div>
            <button onclick="play('${card.sound})"><i class="fas fa-volume-up"></i></button>
            
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
        // view.showNotes(oneCard)
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
view.showInforCollection = (infor, number) => {
    const inforCollection = document.querySelector('.infor-collection-card')
    inforCollection.innerHTML = `    
    <div class="image-collection-cover">
    <img src="${infor.imageCover}" alt="">
    </div>
    <p>Chủ đề: ${infor.collectionName}</p>
    <p>Số thẻ:${number} </p>
    <p>Của: ${infor.owner}</p>`
}
view.showInforUser = (user) => {
    const inforUser = document.getElementById('inforUser')
    inforUser.innerHTML = `
    <div class="ava-user">
    <img src="${user.photoUrl}" alt="">
    </div>
    <div class="infor-user">
    <p>Name: ${user.displayName}</p>
    <p>Bo the: ${user.collection}</p>
    </div>`
}
view.addFormAddCard = (id) => {
    if (id == 0) {
        let formAdd = document.createElement('form')
        formAdd.id = `formCard${id}`
        formAdd.innerHTML = `<div class="card">
    <div class="font-card">
        <div class="image-card">
            <input type="file" name="imageCard" id="inputImageCard${id}">
            <img src="../image/tải xuống.png" alt="" id="imageCard${id}">
            <div class="error" id='imageCollectionError${id}'></div>
        </div>
        <div class="main-vocab">
            <div class="input-vocab">
                <input type="text" name="vocab" placeholder="Add vocab">
                <div class="error" id='vocabError${id}'></div>
            </div>
            <div class="pronuncitaion">
                <div class="sound">
                    <input type="file" name="sound">
                    <i class="fas fa-volume-up"></i>
                    <div class="error" id='soundError${id}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="pronun" placeholder="Add pronun">
                    <div class="error" id="pronunError${id}"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="back-card">
        <div class="input-wrapper">
            <input type="text" name="meaning" placeholder="Meaning">
            <div class="error" id='meaningError${id}'></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="samemeaning" placeholder="Same meaning">
            <div class="error" id='sameMeaningError${id}'></div>
        </div>
        <div class="Example" >
            <h3 style="padding-left: 20px ;">Example</h3>
            <input type="text" name="example" placeholder="Add Example">
            <div class="error" id='exampleError${id}'></div>
        </div>        

    </div>
</div>`
        document.querySelector('.card-wrapper').appendChild(formAdd)
        $(`#inputImageCard${id}`).change(function () {
            readURL(this, `imageCard${id}`);
        })
        return id + 1
    } else {
        let formAdd = document.createElement('form')
        formAdd.id = `formCard${id}`
        formAdd.innerHTML = `<div class="card">
    <div class="font-card">
        <div class="image-card">
            <input type="file" name="imageCard" id="inputImageCard${id}">
            <img src="../image/tải xuống.png" alt="" id="imageCard${id}">
            <div class="error" id='imageCollectionError${id}'></div>
        </div>
        <div class="main-vocab">
            <div class="input-vocab">
                <input type="text" name="vocab" placeholder="Add vocab">
                <div class="error" id='vocabError${id}'></div>
            </div>
            <div class="pronuncitaion">
                <div class="sound">
                    <input type="file" name="sound">
                    <i class="fas fa-volume-up"></i>
                    <div class="error" id='soundError${id}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="pronun" placeholder="Add pronun">
                    <div class="error" id="pronunError${id}"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="back-card">
        <div class="input-wrapper">
            <input type="text" name="meaning" placeholder="Meaning">
            <div class="error" id='meaningError${id}'></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="samemeaning" placeholder="Same meaning">
            <div class="error" id='sameMeaningError${id}'></div>
        </div>
        <div class="Example" >
            <h3 style="padding-left: 20px ;">Example</h3>
            <input type="text" name="example" placeholder="Add Example">
            <div class="error" id='exampleError${id}'></div>
        </div>        
    </div>
</div>`

        let card = document.getElementById(`formCard${id - 1}`)
        let filesImage = card.imageCard.files
        let fileImage = filesImage[0]
        let filesSound = card.sound.files
        let fileSound = filesSound[0]
        let inforCard = {
            imageVocab: fileImage,
            vocab: "card.vocab.value",
            sound: fileSound,
            pronunciation: "card.pronun.value",
            meaning: "card.meaning.value",
            sameMeaning: "card.samemeaning.value",
            idCollection: " ",
            createdAt: new Date(),
        }
        if (controller.checkCard(inforCard, (id - 1))) {

            document.querySelector('.card-wrapper').appendChild(formAdd)
            $(`#inputImageCard${id}`).change(function () {
                readURL(this, `imageCard${id}`);
            })
            model.createCard.push(inforCard)
            console.log(model.createCard)
            console.log(inforCard.imageVocab)

            return true
        } else {
            return false
        }
    }
}



