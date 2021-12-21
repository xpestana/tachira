<template>
	<label>Sub-Servicios</label>
    <div class="position-relative">
    	<select class="form-control custom-select">
        	<option v-for="(subcategory, index) in SubCategories" :key="index" :value="index">
        		{{ subcategory.label }}
        	</option>
		</select>
    </div>
</template>
<script>
	export default {
    	props: ['CurrentSubCategory'],
  	}
</script>