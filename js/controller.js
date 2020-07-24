const controller = {}

controller.setIdText = (id, text) => {
    document.getElementById(id).innerText = text;
}
controller.validateInfor = (idError, infor) => {

    for (let i = 0; i < infor.length; i += 2) {
        let condition = infor[i];
        let meassage = infor[i + 1];
        if (!condition) {
            controller.setIdText(idError, meassage);
            return false;
        }
    }
    controller.setIdText(idError, " ");
    return true;
}
controller.check = async () => {
    let collection = document.getElementById('firebase-add')
    let files = collection.imageCollection.files
    let file = files[0]
    let link
    if (file) {
        link = await model.upload(file)
    } else { link = '' }


    let inforCollection = {
        imageCover: link,
        collectionName: collection.content.value,
        owner: "pdthang.cva@gmail.com",
        createdAt: new Date()
    }
    let validateResults = [
        controller.validateInfor(`errorImageCollection`, [inforCollection.imageCover, "Please input image"]),
        controller.validateInfor(`errorContent`, [inforCollection.collectionName, "Please input Vocab"])]

    if (controller.allPassed(validateResults)) {
        // if (model.createCard.length >= 4) {
            controller.validateInfor(`errorAmountCard`, [model.createCard.length >= 4, "Card at least 4"])
            await model.createDataCollection(inforCollection)
        //     return true
        // }
        // else {
        //     controller.validateInfor(`errorAmountCard`, [model.createCard.length >= 4, "Card at least 4"])
        //     return false
        // }
    }
    console.log(model.createCard)
    return false
}
controller.checkCard = (infor, id) => {
    let validateResults = [
        controller.validateInfor(`imageCollectionError${id}`, [infor.imageVocab, "Please input image"]),
        controller.validateInfor(`vocabError${id}`, [infor.vocab, "Please input Vocab"]),
        controller.validateInfor(`soundError${id}`, [infor.sound, "Please input sound"]),
        controller.validateInfor(`pronunError${id}`, [infor.pronunciation, "Please input pronun"]),
        controller.validateInfor(`meaningError${id}`, [infor.meaning, "Please input meaning"]),
        controller.validateInfor(`sameMeaningError${id}`, [infor.sameMeaning, "Please input same meaning"]),
    ]
    if (controller.allPassed(validateResults)) {
        return true
    }
    return false

}
controller.allPassed = (vailidateResults) => {
    for (let result of vailidateResults) {
        if (!result) {
            return false
        }
    }
    return true
}