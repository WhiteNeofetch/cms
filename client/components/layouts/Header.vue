<template>
    <header class="header">
        <div class="header_left">
            LOGO 
        </div>
        <div class="header_right">
            
            <ul class="nav">
                <li class="nav_link" v-for="({title}, key) in categories" :key="key">
                    <router-link :to="`about`">категория: {{title}} </router-link>
                </li>

            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'MevnHeader',
        props: {
            categories: {
                type: Array,
                default: () => [],
            },
            cartCount: {
                type:Number,
                default: 0,
            }
        },
    }
</script>

<style scoped>
    .header {
        border-bottom: 1px solid;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .nav {
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        width: 100%;
        padding-inline-start: 0;
      
    }
  nav_link {
            margin-right: 10px;
            
        }
        a{
                cursor: pointer;
                text-decoration: none;
                color:black;
                /* &:hover{
                    color:yellow
                } */
            }
</style>