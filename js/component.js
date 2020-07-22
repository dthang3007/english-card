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
<form id="firebase-add">
<div class="main-create">
            <div class=create-collection-card>
                <div class="image-colection">
                    <input type="file" name="image-collection">
                    <img src="../image/tải xuống.png" alt="">
                    <div class='error'></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Content">
                    <div class="error"></div>
                </div>
                <button class="btn-create" type="submit"><i class="fas fa-check" style="color: white;"></i></button>
            </div>
            <div class="create-card-main">
                <div class="card-wrapper">
                <div class="card">
                <div class="font-card">
                    <div class="image-card">
                        <input type="file">
                        <img src="../image/tải xuống.png" alt="">
                    </div>
                    <div class="main-vocab">
                        <div class="input-vocab">
                            <input type="text" name="vocab" placeholder="Add vocab">
                            <div class="error"></div>
                        </div>
                        <div class="pronuncitaion">
                            <div class="sound">
                                <input type="file" name="sound">
                                <i class="fas fa-volume-up"></i>
                                <div class="error"></div>
                            </div>
                            <div class="input-wrapper">
                                <input type="text" name="pronun" placeholder="Add pronun">
                                <div class="error"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="back-card">
                    <div class="input-wrapper">
                        <input type="text" name="meaning" placeholder="Meaning">
                        <div class="error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="samemeaning" placeholder="Same meaning">
                        <div class="error"></div>
                    </div>
                    <div class="Example" >
                        <h3 style="padding-left: 20px ;">Example</h3>
                        <input type="text" name=Example placeholder="Add Example">
                        <div class="error"></div>
                    </div>
                    
                    <button class="btn-add-example" type="button"><i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
                </div>

                    <button class="btn-add-card" type="button"><i class="fas fa-plus-circle"></i></button>
                </div>
                
        </form>

</div>
`