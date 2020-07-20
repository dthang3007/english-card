const view={}
view.setActiveScreen=(screenName)=>{
    switch(screenName){
        case 'collectionUserScreen':
            document.getElementById('app').innerHTML=component.collectionUserScreen
            model.loadCollectionCard()
            
        break
        }
}
view.addCollection=(collection)=>{
    const collectionWrapper=document.createElement('div')
    collectionWrapper.classList.add("collection-item")
    collectionWrapper.innerHTML=`    
    <p>${collection.collectionName}</p>
    <img src="../image/family_ilustration.png" alt="">`
    const listCollection=document.querySelector('.list-collections-card')
    listCollection.appendChild=collectionWrapper
}