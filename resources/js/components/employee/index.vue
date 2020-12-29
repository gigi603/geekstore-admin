<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <router-link to="/store-employee" class="btn btn-primary">Ajouter un salarié</router-link>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Liste des salariés</h1>
                                    </div>
                                    <form class="user" @submit.prevent="storeEmployee" enctype="multipart/form-data">
                                        
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Ajouter</button>
                                        </div>
                                    </form>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        created(){
            if(!User.loggedIn()){
                this.$router.push({ name: '/'})
            }
        },
    }
</script>

<style type="text/css" scoped>
</style>