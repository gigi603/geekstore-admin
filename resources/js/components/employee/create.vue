<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <router-link to="/all-employee" class="btn btn-primary">Tous les salariés</router-link>
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
                                        <h1 class="h4 text-gray-900 mb-4">Ajouter un salarié</h1>
                                    </div>
                                    <form class="user" @submit.prevent="storeEmployee" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label>Nom</label>
                                                    <input type="text" class="form-control" id="exampleInputLastName" 
                                                        placeholder="Saisir le nom" v-model="form.lastname">
                                                    <small class="text-danger" v-if="errors.lastname"> {{ errors.lastname[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Prénom</label>
                                                    <input type="text" class="form-control" id="exampleInputFirstName" 
                                                        placeholder="Saisir le prénom" v-model="form.firstname">
                                                    <small class="text-danger" v-if="errors.firstname"> {{ errors.firstname[0] }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Saisir l'adresse mail" v-model="form.email">
                                                    <small class="text-danger" v-if="errors.email"> {{ errors.email[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Adresse</label>
                                                    <input type="text" class="form-control" id="exampleInputAddress" 
                                                        placeholder="Saisir l'adresse" v-model="form.address">
                                                    <small class="text-danger" v-if="errors.address"> {{ errors.address[0] }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label>Telephone</label>
                                                    <input type="text" class="form-control" id="exampleInputPhone"
                                                        placeholder="Saisir le téléphone" v-model="form.phone">
                                                    <small class="text-danger" v-if="errors.phone"> {{ errors.phone[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Salaire</label>
                                                    <input type="text" class="form-control" id="exampleInputSalary"
                                                        placeholder="Saisir le salaire" v-model="form.sallery">
                                                    <small class="text-danger" v-if="errors.sallery"> {{ errors.sallery[0] }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label>Date d'arrivée</label>
                                                    <input type="date" class="form-control" id="exampleInputJoiningDate" 
                                                        placeholder="Saisir la date d'arrivée" v-model="form.joining_date">
                                                    <small class="text-danger" v-if="errors.joining_date"> {{ errors.joining_date[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Identifiant</label>
                                                    <input type="text" class="form-control" id="exampleInputSalary"
                                                        placeholder="Saisir l'identifiant" v-model="form.nid">
                                                    <small class="text-danger" v-if="errors.nid"> {{ errors.nid[0] }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label>Photo</label>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile">
                                                        <label class="custom-file-label" for="customFile">Choisir une photo</label>
                                                        <small class="text-danger" v-if="errors.photo"> {{ errors.photo[0] }}</small>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="form.photo" style="height: 40px;width: 40px; padding-top: 30px;">
                                                </div>
                                            </div>
                                        </div>
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

<script type='text/javascript'>
    export default {
        created(){
            if(!User.loggedIn()){
                this.$router.push({ name: '/'})
            }
        },
        data () {
            return {
                form: {
                    lastname: null,
                    firstname: null,
                    email: null,
                    phone: null,
                    sallery: null,
                    address: null,
                    photo: null,
                    nid: null,
                    joining_date: null
                },
                errors: {}
            }
        }, 
        methods: {
            storeEmployee(){

            }
        }
    }
</script>

<style type='text/css' scoped>
</style>