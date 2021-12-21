<template>
    <Navbar :nav-light="true" />

    <slot></slot>
     <Footer/>
     <!-- Back to top -->
    <a
      style="display:none"
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
     <font-awesome-icon icon="arrow-up" />
    </a>
    <!-- Back to top -->
</template>
<script>
    import Navbar from '@/components/primary/navbar.vue'
    import Footer from '@/components/primary/footer.vue'

    export default {
        components: {
            Navbar,
            Footer,
        },
    };
</script>