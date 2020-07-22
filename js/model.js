const model = {}
model.currentUser={
    email:"pdthang.cva@gmail.com",
    displayName:"Pham Duc Thang",
    photoUrl:"https://i.pinimg.com/originals/8e/34/e3/8e34e3e4a570228fecaf7ce3c81328f0.jpg",
    collection:"",
    card:"",

}
model.collectionsUser = undefined
model.cardsUser = undefined
model.currentCollection=undefined
model.loadCollectionUser = async () => {
    let collections = await firebase.firestore().collection('collections').where("owner", "==", model.currentUser.email).get()
    
    let data = utils.getDataFromDocs(collections.docs)
    model.collectionsUser = data
    model.currentUser.collection=model.collectionsUser.length
    view.showCollections()
    view.showInforUser(model.currentUser)
}
model.loadCardsUser = async (id) => {
    let cards = await firebase.firestore().collection("cards").where("idCollection",'==',id).get()
    let infor = await firebase.firestore().collection("collections").doc(id).get()
    let data = utils.getDataFromDocs(cards.docs)
    let dataInfor = utils.getDataFromDoc(infor)
    model.currentCollection=dataInfor
    model.cardsUser = data
    console.log(model.currentCollection)
    view.showInforCollection(model.currentCollection,model.cardsUser.length)
    view.showCards()
}