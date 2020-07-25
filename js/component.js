const component={}
component.collectionUserScreen=`
<div class="add-collection-card">
        <div class="create-collection-container">
            <div class="user-container" id="inforUser">
            </div>
            <div class="main-collection-card">
                <div class="title">
                    <h3 style="font-size:40px">Danh sách chủ đề</h3>
                    <h4>Bạn nên tạo các bộ thẻ từ mới theo chủ đề sẽ giúp bạn ghi nhớ lâu hơn</h4>
                </div>
                <div class="list-collections-card">
                        
                    </div>
                </div>
            
            </div>
        </div>
    </div>
`
component.cardUserScreen=`<div class="add-card">
<div class="create-card">
    <div class="infor-collection-card">
    </div>
    <div class="main-add-card">
        
    </div>

</div>
</div>  `
component.createCards=`    <div class="create-card-screen">
<div class="main-create">
        <form id="firebase-add" runat="server">
            <div class=create-collection-card>
                <div class="image-colection">
                    <input type="file" name="imageCollection" id="collectionCard">
                    <img src="../image/tải xuống.png" id="imageCollectionCard" alt="">
                    <div class='error' id="errorImageCollection"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Content" name='content'>
                    <div class="error" id="errorContent"></div>
                </div>
                <button class="btn-create" id="button-submit-collection" type="submit"><i class="fas fa-check" style="color: white;"></i></button>
                <div class="error" id="errorAmountCard"></div>
            </div>
        </form>    
            <div class="create-card-main">
                <div class="card-wrapper">
                </div>
                    <button class="btn-add-card" id="button-add-card" type="button"><i class="fas fa-plus-circle"></i></button>
                </div>
</div>
`
component.editCardsScreen=`    <div class="edit-card-screen">
<div class="edit-card-main">
    <div class="infor-collection-card-edit">

    </div>
    <div class="main-edit-card">
        <div class="card-wrapper">
            
        </div>
        <button class="btn-add-card" id="button-add-card-edit" type="button"><i
                class="fas fa-plus-circle"></i></button>
    </div>
</div>
</div> 
`