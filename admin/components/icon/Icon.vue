<template>
    <svg
        aria-hidden="true"
        class="text-white group-hover:text-indigo-400"
        fill="currentColor"
        :style="styleObject"
    >
        <use :xlink:href="`#${icon}`"/>
    </svg>
</template>

<script>
export default {
    name:"JsmordIcon",
    props:{
        icon:{
            type:String,
            required:true,
            default:''
        },
        size:{
            type:[String,Number],
            required:false,
            default:32,
        }
    },
    computed:{
        styleObject(){
            const style = {
                height: `${this.size}px`,
                width: `${this.size}px`,
            }
            return style
        }
    }
}
</script>