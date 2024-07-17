<template> 
    <footer class="footer"> 
        <div class="container-fluid"> 
            <div class="row"> 
                <div class="col-sm-6"> 
                    2024 © Leprechaun
</div>                 
                <div class="col-sm-6"> 
                    <div class="text-sm-end d-none d-sm-block"> 
                        Crafted with<i class="mdi mdi-heart text-danger"></i> by Themesdesign
                    </div>                     
                </div>                 
            </div>             
        </div>         
    </footer>     
</template>
<style scoped>
.footer {
    background-color: #132e39;
    color: white; /* Optional: to make the text more readable */
    padding: 10px 0; /* Optional: add some padding */
}

.footer .container-fluid {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer .text-sm-end {
    text-align: right;
}

.footer i.text-danger {
    color: red; /* Keeps the heart icon red */
}
</style>
