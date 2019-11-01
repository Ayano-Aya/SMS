<template>
    <div class="alert alert-warning alert-dismissible" role="alert">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    {{message}}
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:'alert',
    props:["message"],
    data() {
        return {
            
        }
    },
}
</script>
<style lang="">
    
</style>