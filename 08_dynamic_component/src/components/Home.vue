<template>
    <h1> Home Page </h1>
</template>

<script>
export default{
    // when we change option to about, will print logs.
    unmount(){
        console.log('Home components unmounted')
    },

    activated(){
        console.log('Home compotents activated')
    },
    deactivated(){
        console.log('Home compotents deactivated')
    }
}
</script>