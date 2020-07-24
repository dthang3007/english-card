const model = {}
model.createCard = []
model.currentUser = {
    email: "pdthang.cva@gmail.com",
    displayName: "Pham Duc Thang",
    photoUrl: "https://i.pinimg.com/originals/8e/34/e3/8e34e3e4a570228fecaf7ce3c81328f0.jpg",
    collection: "",
    card: "",

}
model.collectionsUser = undefined
model.cardsUser = undefined
model.currentCollection = undefined
model.loadCollectionUser = async () => {
    let collections = await firebase.firestore().collection('collections').where("owner", "==", model.currentUser.email).orderBy("createdAt", "desc").get()
    let data = utils.getDataFromDocs(collections.docs)
    model.collectionsUser = data
    model.currentUser.collection = model.collectionsUser.length
    view.showCollections()
    view.showInforUser(model.currentUser)
    model.createCard
}
model.loadCardsUser = async (id) => {
    let cards = await firebase.firestore().collection("cards").where("idCollection", '==', id).get()
    let infor = await firebase.firestore().collection("collections").doc(id).get()
    let data = utils.getDataFromDocs(cards.docs)
    let dataInfor = utils.getDataFromDoc(infor)
    model.currentCollection = dataInfor
    model.cardsUser = data
    view.showInforCollection(model.currentCollection, model.cardsUser.length)
    view.showCards()
}
model.createDataCollection = async (infor) => {
    await firebase.firestore().collection("collections").add(infor)
    await model.createDataCard()
    view.setActiveScreen("collectionUserScreen")
}
model.createDataCard = async () => {
    let collections = await firebase.firestore().collection('collections').where("owner", "==", model.currentUser.email).orderBy("createdAt", "desc").get()
    let data = utils.getDataFromDocs(collections.docs)
    model.collectionsUser = data
    for (let oneCard of model.createCard) {
        let link
        link = await model.upload(oneCard.imageVocab)
        let sound
        sound =await model.upload(oneCard.sound)
        console.log(link)
        oneCard.imageVocab=link
        oneCard.sound=sound
        oneCard.idCollection = model.collectionsUser[0].id
        await firebase.firestore().collection("cards").add(oneCard)
    }
    model.createCard=[]
}
model.upload = async (file) => {
    let fileName = file.name
    let filePath = `upload/${fileName}`
    let fileRef = firebase.storage().ref().child(filePath)
    await fileRef.put(file)
    let fileLink = model.getFileUrl(fileRef)
    return fileLink
}
model.getFileUrl = (fileRef) => {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
}
model.upImage= async (fileImage)=>{
    let link
    if(fileImage){
        link = await model.upload(fileImage)
        return link
    }else{
        link=''
        return link
    }


}
